
# A blockchain bridge
Transfers a fixed amount of token from a client on one blockchain from a listener on another

> **NOTE:** bridge and token addresses must be changed in the code, as well as the provides, according to blockchain 

## How to transfer
 1. Open the graphical browser interface
 2. Connect your Metamask
 3. Switch to the network where you have tokens 
 4. Click Transfer

## How to listen
 1. Install Web3 using npm
 2. Add your private key in the bridge.node.js file
 3. Launch the file using Nodejs

## Contract interface

 - **deposit**(uint) adds tokens to your balance (required for a listener)
 - **send_from_balance**(address) sens tokens from balance (for listeners)
 - **send_from_acc**(address) sens tokens from your acc (for the users)
 - **get_joined** gets available listeners (unless they lose tokens)
 - **get_tx_to** or **get_tx_from** helps to verify if a listener has finished all the requests, and helps a listener to get unsent requests

## How it works

 - No third party required
 - Listener makes a larger deposit to prevent fraud 
 - Sender checks listeners deposits and transactions to find a good listener

## Todo
 - Add more data to the interfce (tx time, bridge amount, current address)
 - Add fees to the listeners
 - Private key file

