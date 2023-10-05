// 根据不同的链返回不同的合约地址 以及 ABI

export const CHAIN_MAP = {
  56: {
    contarctAddress: "x",
  },
  97: {
    contarctAddress: "0x8Ca91253e35Aa64BB2f3d5A14A2BF43ecd520E59",
	chainName: "BSC Testnet",
  },
  
  314: {
    contarctAddress: "x",
	chainName: "Filecoin - Mainnet",
  },
  314159: {
    contarctAddress: "0xb8Ca0CA732E447A3653c3FfaE770296E1a7077cb",
	chainName: "Filecoin - Calibration testnet",
  },
};

export const GAS_LIMIT_MULTIPLIER = 1.2;

export const ABI = [
  {
    inputs: [
      {
        internalType: "string[]",
        name: "_cids",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "_names",
        type: "string[]",
      },
    ],
    name: "addImages",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "cids",
        type: "string[]",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "names",
        type: "string[]",
      },
    ],
    name: "ImagesAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "cids",
        type: "string[]",
      },
    ],
    name: "ImagesRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "_cids",
        type: "string[]",
      },
    ],
    name: "removeImages",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserImages",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "cid",
            type: "string",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
        ],
        internalType: "struct DecentralizedImageUpload.Image[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
