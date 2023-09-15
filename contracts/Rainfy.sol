// SPDX-License-Identifier: MIT
// Author @nnamdipremium

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Rainfy is Ownable {
  IERC20 euroTokenAddress; //EURO
  IERC20 gbpTokenAddress; //POUND
  IERC20 usdTokenAddress; //DOLLAR
  uint256 penaltyFee = 5; //5%

  IERC20 rainfyTokenAddress; //Rainfy token for successful savings

  enum Status {
    INACTIVE,
    ACTIVE
  }

  struct Account {
    uint256 balance;
    Status status;
    uint256 createdAt;
    uint256 expiresAt;
  }

  struct Savings {
    uint256 duration;
    uint256 amount;
  }

  //users active savings
  mapping(address => mapping(string => Account)) records;

  //tracks all user's succesful savings
  mapping(address => mapping(string => Savings[])) history;

  event Created(
    address indexed owner,
    string currency,
    uint256 amount,
    uint256 indexed createdAt,
    uint256 expiresAt
  );

  event Updated(uint256 amount, string currency, uint256 updatedAt);

  event Broken(
    address indexed owner,
    string currency,
    uint256 saved,
    uint256 expiredAt
  );

  constructor(
    address _euroTokenAddress,
    address _gbpTokenAddress,
    address _usdTokenAddress
  ) {
    euroTokenAddress = IERC20(_euroTokenAddress);
    gbpTokenAddress = IERC20(_gbpTokenAddress);
    usdTokenAddress = IERC20(_usdTokenAddress);
  }

  function createPiggy(
    uint256 _amount,
    uint256 _duration,
    string calldata _currency
  ) external {
    require(_amount > 0 && _duration > 0, "Invalid values");

    bytes32 currency = keccak256(abi.encodePacked(_currency));

    //get the token contract and transfer
    if (currency == hashedString("EUR")) {
      euroTokenAddress.transferFrom(msg.sender, address(this), _amount);
    } else if (currency == hashedString("GBP")) {
      gbpTokenAddress.transferFrom(msg.sender, address(this), _amount);
    } else if (currency == hashedString("USD")) {
      usdTokenAddress.transferFrom(msg.sender, address(this), _amount);
    } else {
      return;
    }

    //uint256 expiresAt = block.timestamp + (_duration * 86400); //convert to days

    uint256 expiresAt = block.timestamp + _duration;

    records[msg.sender][_currency] = Account({
      balance: _amount,
      status: Status.ACTIVE,
      createdAt: block.timestamp,
      expiresAt: expiresAt
    });

    emit Created(msg.sender, _currency, _amount, expiresAt, block.timestamp);
  }

  function updateBalance(uint256 _amount, string calldata _currency) external {
    require(
      records[msg.sender][_currency].status == Status.ACTIVE,
      "Piggie is not ACTIVE"
    );
    require(_amount > 0, "Invalid amount");

    bytes32 currency = keccak256(abi.encodePacked(_currency));

    //get the token contract and transfer
    if (currency == hashedString("EUR")) {
      euroTokenAddress.transferFrom(msg.sender, address(this), _amount);
    } else if (currency == hashedString("GBP")) {
      gbpTokenAddress.transferFrom(msg.sender, address(this), _amount);
    } else if (currency == hashedString("USD")) {
      usdTokenAddress.transferFrom(msg.sender, address(this), _amount);
    } else {
      return;
    }

    records[msg.sender][_currency].balance += _amount;

    emit Updated(_amount, _currency, block.timestamp);
  }

  function calculateReward(
    Account memory account
  ) internal pure returns (uint256) {
    return (account.balance * (account.expiresAt - account.createdAt)) / 1000;
  }

  function breakPiggy(string calldata _currency) external {
    Account memory account = records[msg.sender][_currency];

    require(account.status == Status.ACTIVE, "No record");

    //get the token contract and transfer
    bytes32 currency = keccak256(abi.encodePacked(_currency));

    //penalize if broken before duration
    if (block.timestamp < (account.expiresAt)) {
      uint256 penaltyBalance = account.balance -
        ((penaltyFee * account.balance) / 100);
      if (currency == hashedString("EUR")) {
        euroTokenAddress.transfer(msg.sender, penaltyBalance);
      } else if (currency == hashedString("GBP")) {
        gbpTokenAddress.transfer(msg.sender, penaltyBalance);
      } else if (currency == hashedString("USD")) {
        usdTokenAddress.transfer(msg.sender, penaltyBalance);
      } else {
        revert();
      }
    } else {
      //reward with RAIN token
      if (currency == hashedString("EUR")) {
        euroTokenAddress.transfer(msg.sender, account.balance);
        rainfyTokenAddress.transfer(msg.sender, calculateReward(account));
        //push to history
        Savings memory savings = Savings({
          duration: account.expiresAt - account.createdAt,
          amount: account.balance
        });

        history[msg.sender][_currency].push(savings);
      } else if (currency == hashedString("GBP")) {
        gbpTokenAddress.transfer(msg.sender, account.balance);
        rainfyTokenAddress.transfer(msg.sender, calculateReward(account));
        //push to history
        Savings memory savings = Savings({
          duration: account.expiresAt - account.createdAt,
          amount: account.balance
        });

        history[msg.sender][_currency].push(savings);
      } else if (currency == hashedString("USD")) {
        usdTokenAddress.transfer(msg.sender, account.balance);
        rainfyTokenAddress.transfer(msg.sender, calculateReward(account));
        //push to history
        Savings memory savings = Savings({
          duration: account.expiresAt - account.createdAt,
          amount: account.balance
        });

        history[msg.sender][_currency].push(savings);
      } else {
        revert();
      }
    }

    //reset record
    account.balance = 0;
    account.createdAt = 0;
    account.expiresAt = 0;
    account.status = Status.INACTIVE;

    records[msg.sender][_currency] = account;
    emit Broken(msg.sender, _currency, account.balance, block.timestamp);
  }

  function getHistory(
    address _owner,
    string calldata _currency
  ) external view returns (Savings[] memory) {
    return history[_owner][_currency];
  }

  function getRecord(
    address _owner,
    string calldata _currency
  ) external view returns (Account memory) {
    return records[_owner][_currency];
  }

  function isActive(
    address _owner,
    string calldata _currency
  ) external view returns (bool) {
    uint256 status = uint256(records[_owner][_currency].status);
    return status > 0 ? true : false;
  }

  function setRainfyToken(address _rainfyTokenAddress) external onlyOwner {
    rainfyTokenAddress = IERC20(_rainfyTokenAddress);
  }

  function hashedString(string memory _string) internal pure returns (bytes32) {
    return keccak256(abi.encodePacked(_string));
  }
}
