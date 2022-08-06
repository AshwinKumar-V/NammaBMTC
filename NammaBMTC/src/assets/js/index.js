
const web3 = new Web3('https://ropsten.infura.io/v3/c0e47c38ff3740b59fd9ac1354e2a96a');

const abi = JSON.parse('[	{		"inputs": [			{				"internalType": "address",				"name": "newEtmAddress",				"type": "address"			},			{				"internalType": "string",				"name": "newBusInfo",				"type": "string"			}		],		"name": "addEtm",		"outputs": [			{				"internalType": "bool",				"name": "",				"type": "bool"			}		],		"stateMutability": "nonpayable",		"type": "function"	},	{		"inputs": [			{				"internalType": "string",				"name": "newValue",				"type": "string"			}		],		"name": "publishData",		"outputs": [			{				"internalType": "bool",				"name": "",				"type": "bool"			}		],		"stateMutability": "nonpayable",		"type": "function"	},	{		"inputs": [			{				"internalType": "address",				"name": "conductorAddress",				"type": "address"			}		],		"name": "removeConductors",		"outputs": [			{				"internalType": "bool",				"name": "",				"type": "bool"			}		],		"stateMutability": "nonpayable",		"type": "function"	},	{		"inputs": [],		"stateMutability": "nonpayable",		"type": "constructor"	},	{		"inputs": [],		"name": "getData",		"outputs": [			{				"internalType": "string[][]",				"name": "",				"type": "string[][]"			}		],		"stateMutability": "view",		"type": "function"	},	{		"inputs": [],		"name": "getLatestData",		"outputs": [			{				"internalType": "string[][]",				"name": "",				"type": "string[][]"			}		],		"stateMutability": "view",		"type": "function"	}]')
const myAddress = '0xa25beE6ae3B9B9384e2d74cD4e1B36fC8FF8F729'
const contract = new web3.eth.Contract(abi, myAddress);

var accounts;
var myAccount;

//function to get all data from blockchain
function getData(){
  contract.methods.getData().call()
  .then(result => console.log(result));
}

//function to put data on blockchain---------------------------------
async function loadWeb3() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
  }
}

async function loadContract() {
  return await new window.web3.eth.Contract(abi, myAddress);
}
async function getCurrentAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  return accounts[0];
}

async function putBusData(text) {
  await loadWeb3();
  window.contract = await loadContract();
  const account = await getCurrentAccount();
  let result = await window.contract.methods.publishData(text).send({ from: account });
}

async function addETMData(text) {
  await loadWeb3();
  window.contract = await loadContract();
  const account = await getCurrentAccount();
  let result = await window.contract.methods.publishData(text).send({ from: account });
}

async function removeETMData(text) {
  await loadWeb3();
  window.contract = await loadContract();
  const account = await getCurrentAccount();
  let result = await window.contract.methods.publishData(text).send({ from: account });
}


//function to get my account--------------------------------
async function getAccounts(){
  if (typeof window.ethereum !== 'undefined') {
    var accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    myAccount = accounts[0];
    console.log(typeof myAccount);
    return myAccount;
  }
  else{
    alert("Metamask not installed!");
  }
}

function convertToString(etmData){
  return (JSON.stringify(etmData).replaceAll("\"","'"))
}
function convertToJSON(etmData){
  return (JSON.parse(etmData).replaceAll("'","\""))
}




