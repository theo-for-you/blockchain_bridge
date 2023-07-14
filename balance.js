const balances_elem = document.getElementById("balances")



async function update_balances() {

    let from_balance = await get_balance(from_token) + " " + token_name + " " + from_chain_name + ", "
    let to_balance = await get_balance(to_token) + " " + token_name + " " + to_chain_name

    balances_elem.innerHTML = "Balances: " + from_balance + to_balance
}


async function get_balance(contract) {
    return await contract.methods.balanceOf(address).call();
}

// document.getElementById("send").onclick = () => {
//     send(document.getElementById("to").value, 1);
// }


// async function send(to, value) {
//     await from_token.methods.transfer(to, value).send({ from: address });
//     update()
// }