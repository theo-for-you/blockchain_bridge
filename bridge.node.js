const Web3 = require('web3');

const bridge_abi = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "units",
                "type": "uint256"
            }
        ],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }
        ],
        "name": "send_from_acc",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }
        ],
        "name": "send_from_balance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "coin",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "balances",
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
        "name": "bridge_amount",
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
        "name": "bridge_coin",
        "outputs": [
            {
                "internalType": "contract IERC20",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "get_joined",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            }
        ],
        "name": "get_tx_from",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }
        ],
        "name": "get_tx_to",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

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


const bsc = new Web3.Web3("http://127.0.0.1:8545");
const pl = new Web3.Web3("http://127.0.0.1:8546");

const addr = Web3.eth.accounts.privateKeyToAddress(priv)


const pl_bridge_addr = "0x62da54AcFBAb1a948D8932ac120fC3c60Fd241E4"
const bsc_bridge_addr = "0x32ce229071581124062d589445E981654eF3e1e8"

const pl_token_addr = "0xe8676Dd6Bc54b541Cc483a3E36fe1Fecf9007d7B"
const bsc_token_addr = "0x8b4158684c456da2BA93a14ae799fD2BebA250e9"

class Contract {
    constructor(chain, obj, addr) {
        this.chain = chain
        this.methods = obj.methods
        this.addr = addr
    }
}

const pl_bridge_contract = new Contract(pl, new pl.eth.Contract(bridge_abi, pl_bridge_addr), pl_bridge_addr)
const bsc_bridge_contract = new Contract(bsc, new bsc.eth.Contract(bridge_abi, bsc_bridge_addr), bsc_bridge_addr)

const pl_token_contract = new Contract(pl, new pl.eth.Contract(token_abi, pl_token_addr), pl_token_addr)
const bsc_token_contract = new Contract(bsc, new bsc.eth.Contract(token_abi, bsc_token_addr), bsc_token_addr)


setInterval(scan_all, 5000);

function scan_all() {
    check_balance(bsc_bridge_contract, bsc_token_contract, pl_bridge_contract)
    check_balance(pl_bridge_contract, pl_token_contract, bsc_bridge_contract)
}



function count_unsend(from_me, to_me) {

    let unsend = from_me.filter((tx) => { to_me.indexOf(tx) == -1; })

    from_me.forEach((tx) => {
        if (to_me.indexOf(tx) == -1) return;

        let diff = from_me.filter((tx_2) => tx_2 == tx).length - to_me.filter((tx_2) => tx_2 == tx).length
        // console.log(diff)

        if (diff > 0 && unsend.indexOf(tx) == -1) {
            // console.log("aa")
            unsend = unsend.concat(Array(diff).fill(tx))
        }
    })

    return unsend
}

async function stat_scan(from_bridge_contract, to_bridge_contract) {
    let sent_to_me = await to_bridge_contract.methods.get_tx_to(addr).call()
    let sent_from_me = await from_bridge_contract.methods.get_tx_from(addr).call()

    // console.log(sent_to_me, sent_from_me)

    let unsend = count_unsend(sent_to_me, sent_from_me)

    for (let target of unsend) {
        await send_tx(from_bridge_contract, from_bridge_contract.methods.send_from_balance(target).encodeABI())
    }

    console.log(unsend)
}



async function check_balance(from_bridge_contract, from_token_contract, to_bridge_contract) {

    if (await from_bridge_contract.methods.balances(addr).call() > 2) {
        await stat_scan(from_bridge_contract, to_bridge_contract);
        return;
    }

    if (await from_token_contract.methods.balanceOf(addr).call() < 3) return;

    await send_tx(from_token_contract, from_token_contract.methods.approve(from_bridge_contract.addr, 3).encodeABI())
    await send_tx(from_bridge_contract, from_bridge_contract.methods.deposit(3).encodeABI())

    await stat_scan(from_bridge_contract, to_bridge_contract);
}


async function send_tx(contract, data) {
    let tx = {
        from: addr,
        to: contract.addr,
        data: data,
        gas: 300000,
        gasPrice: await contract.chain.eth.getGasPrice()
    }

    let signed = await contract.chain.eth.accounts.signTransaction(tx, priv);
    await contract.chain.eth.sendSignedTransaction(signed.rawTransaction);

    console.log(signed.rawTransaction)
}


// bsc.eth.sendSignedTransaction()
