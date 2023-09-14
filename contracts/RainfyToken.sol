// SPDX-License-Identifier: MIT
// Author @nnamdipremium

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RainfyToken is ERC20 {
  address rainfyHQ;
  uint rewards = 100000000000000000000000; //100,000 token rewards for saving

  constructor(address _rainfyHQ) ERC20("Rainfy Token", "RAIN") {
    rainfyHQ = _rainfyHQ;
    _mint(rainfyHQ, rewards);
    _mint(msg.sender, 900000000000000000000000); //team wallet
  }
}
