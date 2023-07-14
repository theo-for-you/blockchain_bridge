
const history_elem = document.getElementById("history")

// class Tx {
//     constructor(from_addr, name) {
//         this.addr = from_addr;

//         if (name == this.to_chain_name) {
//             this.to_chain = to_chain_name;
//             this.from_chain = from_chain_name;
//         } else {
//             this.to_chain = from_chain_name;
//             this.from_chain = to_chain_name;
//         }
//     }
// }


async function get_all_tx(bridge, name) {

    let sent_to_me = await bridge.methods.get_tx_to(address).call()
    let sent_from_me = await bridge.methods.get_tx_from(address).call()

    // let res_to = []
    // let res_from = []


    // sent_to_me.forEach((element,) => {
    //     res_to.push(new Tx(element, name))
    // });

    // sent_from_me.forEach((element,) => {
    //     res_from.push(new Tx(element, name))
    // });


    return [sent_to_me, sent_from_me];
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

async function update_history() {

    history_elem.innerHTML = ""

    let [sent_to_me_1, sent_from_me_1] = await get_all_tx(to_bridge, to_chain_name);
    let [sent_to_me_2, sent_from_me_2] = await get_all_tx(from_bridge, to_chain_name);

    // console.log(sent_to_me_1, sent_from_me_2)

    let unsend_1 = count_unsend(sent_from_me_2, sent_to_me_1)
    let unsend_2 = count_unsend(sent_from_me_1, sent_to_me_2)


    // console.log(unsend)

    // console.log(unsend)


    for (let tx of sent_to_me_2) {
        let tx_obj = document.createElement("div")
        tx_obj.innerHTML = to_chain_name + " -> " + from_chain_name + " " + tx
        history_elem.append(tx_obj)
    }

    for (let tx of sent_to_me_1) {
        let tx_obj = document.createElement("div")
        tx_obj.innerHTML = from_chain_name + " -> " + to_chain_name + " " + tx
        history_elem.append(tx_obj)
    }

    for (let tx of unsend_1) {
        let tx_obj = document.createElement("div")
        tx_obj.innerHTML = "Waiting: " + from_chain_name + " -> " + to_chain_name + " " + tx
        history_elem.append(tx_obj)
    }


    for (let tx of unsend_2) {
        let tx_obj = document.createElement("div")
        tx_obj.innerHTML = "Waiting: " + to_chain_name + " -> " + from_chain_name + " " + tx
        history_elem.append(tx_obj)
    }
}