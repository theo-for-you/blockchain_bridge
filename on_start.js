
let address;



start()
async function start() {
    await check_chain();
    await get_address();

    await update_header()
    await update_balances()
    await update_history()
}

ethereum.on('chainChanged', start);
ethereum.on('accountsChanged', start)


async function get_address() {
    address = (await ethereum.request({ method: 'eth_requestAccounts' }))[0];
}
