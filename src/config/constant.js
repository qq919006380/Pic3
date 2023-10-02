export const DEFAULT_CONTRACT_ADDRESS =
  "0x4C27AD26C8Bcf6F599A3e74fddf8545Afe22D684";

export const GAS_LIMIT_MULTIPLIER = 1.2;



export const ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_cid",
				"type": "string"
			}
		],
		"name": "addCID",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
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
				"internalType": "string",
				"name": "cid",
				"type": "string"
			}
		],
		"name": "CIDAdded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserCIDs",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
