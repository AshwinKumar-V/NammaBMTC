
const web3 = new Web3('https://ropsten.infura.io/v3/c0e47c38ff3740b59fd9ac1354e2a96a');

// web3.eth.accounts.wallet.add('');
// web3.eth.getBalance('')
//   .then(balance => console.log(balance));

const abi = JSON.parse('[	{		"inputs": [],		"stateMutability": "nonpayable",		"type": "constructor"	},	{		"inputs": [			{				"internalType": "address",				"name": "newEtmAddress",				"type": "address"			},			{				"internalType": "string",				"name": "newBusInfo",				"type": "string"			}		],		"name": "addEtm",		"outputs": [			{				"internalType": "bool",				"name": "",				"type": "bool"			}		],		"stateMutability": "nonpayable",		"type": "function"	},	{		"inputs": [],		"name": "getData",		"outputs": [			{				"internalType": "string[][]",				"name": "",				"type": "string[][]"			}		],		"stateMutability": "view",		"type": "function"	},	{		"inputs": [			{				"internalType": "string",				"name": "newValue",				"type": "string"			}		],		"name": "publishData",		"outputs": [			{				"internalType": "bool",				"name": "",				"type": "bool"			}		],		"stateMutability": "nonpayable",		"type": "function"	},	{		"inputs": [			{				"internalType": "address",				"name": "conductorAddress",				"type": "address"			}		],		"name": "removeConductors",		"outputs": [			{				"internalType": "bool",				"name": "",				"type": "bool"			}		],		"stateMutability": "nonpayable",		"type": "function"	}]')

const contract = new web3.eth.Contract(abi, '0x34462b72c561D88A3e741189404e60072b3c4803');

function getData(){
  contract.methods.getData().call()
  .then(result => console.log(result));
}


// web3.eth.sendTransaction({from: ' ', value: 1000});
// contract.methods.write().sendTransaction({from: ''});

function printConsole(){
  console.log("Hello from JS file.");
}


