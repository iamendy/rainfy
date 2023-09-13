const connect = {
  address: "0x6caD0d4880ac9f1bf756AB6a76eA4Cb339D6022d",
  abi: [
    {
      inputs: [
        {
          internalType: "address",
          name: "_euroTokenAddress",
          type: "address",
        },
        {
          internalType: "address",
          name: "_gbpTokenAddress",
          type: "address",
        },
        {
          internalType: "address",
          name: "_usdTokenAddress",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: false,
          internalType: "string",
          name: "currency",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "saved",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "expiredAt",
          type: "uint256",
        },
      ],
      name: "Broken",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: false,
          internalType: "string",
          name: "currency",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "createdAt",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "expiresAt",
          type: "uint256",
        },
      ],
      name: "Created",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "currency",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "updatedAt",
          type: "uint256",
        },
      ],
      name: "Updated",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_currency",
          type: "string",
        },
      ],
      name: "breakPiggy",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_duration",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_currency",
          type: "string",
        },
      ],
      name: "createPiggy",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_owner",
          type: "address",
        },
        {
          internalType: "string",
          name: "_currency",
          type: "string",
        },
      ],
      name: "getRecord",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "balance",
              type: "uint256",
            },
            {
              internalType: "enum Rainfy.Status",
              name: "status",
              type: "uint8",
            },
            {
              internalType: "uint256",
              name: "createdAt",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "expiresAt",
              type: "uint256",
            },
          ],
          internalType: "struct Rainfy.Account",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_owner",
          type: "address",
        },
        {
          internalType: "string",
          name: "_currency",
          type: "string",
        },
      ],
      name: "isActive",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_currency",
          type: "string",
        },
      ],
      name: "updateBalance",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
};

export default connect;
