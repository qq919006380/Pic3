// 根据不同的链返回不同的合约地址 以及 ABI

export const CHAIN_MAP = {
  56: {
    contarctAddress: "x",
  },
  97: {
    contarctAddress: "0x44B772cCE7a8b9834cA87Bd861D8E3e92810c726",
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
				"name": "encryptedToken",
				"type": "bytes"
			}
		],
		"name": "TokenUploaded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "bytes",
				"name": "_encryptedToken",
				"type": "bytes"
			}
		],
		"name": "uploadToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "retrieveToken",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
