
const token_abi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "initialSupply",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]



// npx ganache instances list
// npx ganache --port=8545 --detach --chain.chainId 5777 --database.dbPath ~/chains/lbsc
// "0x1691"
const bsc = new Web3("http://127.0.0.1:8545");
// npx ganache --port=8546 --detach --chain.chainId 5778 --database.dbPath ~/chains/lpl
// "0x1692"
const pl = new Web3("http://127.0.0.1:8546");

// const pl = new Web3("https://polygon-mumbai.blockpi.network/v1/rpc/public");
// const bsc = new Web3("https://data-seed-prebsc-2-s2.binance.org:8545");

const from_chain = new Web3(ethereum);
let to_chain;

let from_chain_name;
let to_chain_name;

let from_token;
let to_token;

let from_bridge
let to_bridge


let from_bridge_addr
let to_bridge_addr



const token_on_polygon = "0xe8676Dd6Bc54b541Cc483a3E36fe1Fecf9007d7B"
const token_on_bsc = "0x8b4158684c456da2BA93a14ae799fD2BebA250e9"
const pl_bridge_addr = "0x62da54AcFBAb1a948D8932ac120fC3c60Fd241E4"
const bsc_bridge_addr = "0x32ce229071581124062d589445E981654eF3e1e8"
const token_name = "WBTC"


async function check_chain() {
    let chainId = await ethereum.request({ method: 'eth_chainId' });

    // Polygon
    if (chainId == "0x1692") {

        to_chain = bsc;
        to_chain_name = "BSC";
        from_chain_name = "Polygon";

        from_token = new from_chain.eth.Contract(token_abi, token_on_polygon);
        to_token = new to_chain.eth.Contract(token_abi, token_on_bsc);

        from_bridge_addr = pl_bridge_addr;
        from_bridge = new from_chain.eth.Contract(bridge_abi, pl_bridge_addr);
        to_bridge = new to_chain.eth.Contract(bridge_abi, bsc_bridge_addr);
    }

    // BSC
    if (ethereum.chainId == "0x1691") {
        to_chain = pl;
        from_chain_name = "BSC";
        to_chain_name = "Polygon";

        from_token = new from_chain.eth.Contract(token_abi, token_on_bsc);
        to_token = new to_chain.eth.Contract(token_abi, token_on_polygon);

        from_bridge_addr = bsc_bridge_addr;
        from_bridge = new from_chain.eth.Contract(bridge_abi, bsc_bridge_addr);
        to_bridge = new to_chain.eth.Contract(bridge_abi, pl_bridge_addr);
    }
}

