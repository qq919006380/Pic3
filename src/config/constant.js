// 根据不同的链返回不同的合约地址 以及 ABI

export const CHAIN_MAP = {
//   56: {
//     contarctAddress: "0x2821f4dcaa5D6EF2791b9A7DF2cb12E8D9456D55",
//   },
  97: {
    contarctAddress: "0x2821f4dcaa5D6EF2791b9A7DF2cb12E8D9456D55",
    chainName: "BSC Testnet",
  },
  324: {
    contarctAddress: "0x2821f4dcaa5D6EF2791b9A7DF2cb12E8D9456D55",
    chainName: "zkSync Era Mainnet",
  },
  280: {
    contarctAddress: "0x2821f4dcaa5D6EF2791b9A7DF2cb12E8D9456D55",
    chainName: "zkSync Era Testnet",
  },

  314: {
    contarctAddress: "0xb8Ca0CA732E447A3653c3FfaE770296E1a7077cb",
    chainName: "Filecoin - Mainnet",
  },
  314159: {
    contarctAddress: "0x15fBB20a99bd9B909973Fc668704B16a14B83500",
    chainName: "Filecoin - Calibration testnet",
  },
};

export const GAS_LIMIT_MULTIPLIER = 1.2;

export const ABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "cid",
				"type": "bytes"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "ImageAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "cid",
				"type": "bytes"
			}
		],
		"name": "ImageRemoved",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "bytes[]",
				"name": "cids",
				"type": "bytes[]"
			},
			{
				"internalType": "string[]",
				"name": "names",
				"type": "string[]"
			}
		],
		"name": "addImages",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUserImages",
		"outputs": [
			{
				"components": [
					{
						"internalType": "bytes",
						"name": "cid",
						"type": "bytes"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					}
				],
				"internalType": "struct DecentralizedImageStorage.ImageDetail[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes[]",
				"name": "cids",
				"type": "bytes[]"
			}
		],
		"name": "removeImages",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
