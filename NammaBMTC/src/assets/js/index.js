
const web3 = new Web3('https://ropsten.infura.io/v3/c0e47c38ff3740b59fd9ac1354e2a96a');

const abi = JSON.parse('[	{		"inputs": [],		"stateMutability": "nonpayable",		"type": "constructor"	},	{		"inputs": [			{				"internalType": "address",				"name": "newEtmAddress",				"type": "address"			},			{				"internalType": "string",				"name": "newBusInfo",				"type": "string"			}		],		"name": "addEtm",		"outputs": [			{				"internalType": "bool",				"name": "",				"type": "bool"			}		],		"stateMutability": "nonpayable",		"type": "function"	},	{		"inputs": [],		"name": "getData",		"outputs": [			{				"internalType": "string[][]",				"name": "",				"type": "string[][]"			}		],		"stateMutability": "view",		"type": "function"	},	{		"inputs": [			{				"internalType": "string",				"name": "newValue",				"type": "string"			}		],		"name": "publishData",		"outputs": [			{				"internalType": "bool",				"name": "",				"type": "bool"			}		],		"stateMutability": "nonpayable",		"type": "function"	},	{		"inputs": [			{				"internalType": "address",				"name": "conductorAddress",				"type": "address"			}		],		"name": "removeConductors",		"outputs": [			{				"internalType": "bool",				"name": "",				"type": "bool"			}		],		"stateMutability": "nonpayable",		"type": "function"	}]')
const contract = new web3.eth.Contract(abi, '0x34462b72c561D88A3e741189404e60072b3c4803');

var accounts;
var myAccount;

//function to get all data from blockchain
function getData(){
  contract.methods.getData().call()
  .then(result => console.log(result));
}

//function to put data on blockchain
async function loadWeb3() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
  }
}

async function loadContract() {
  return await new window.web3.eth.Contract(abi, '0x34462b72c561D88A3e741189404e60072b3c4803');
}
async function getCurrentAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  return accounts[0];
}

async function putData() {
  await loadWeb3();
  window.contract = await loadContract();
  const account = await getCurrentAccount();
  let result = await window.contract.methods.publishData("Logesh").send({ from: account });
}


//function to get all accounts
async function getAccounts(){
  if (typeof window.ethereum !== 'undefined') {
    var accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    myAccount = accounts[0];
    console.log(myAccount);
  }
  else{
    alert("Metamask not installed!");
  }
}



