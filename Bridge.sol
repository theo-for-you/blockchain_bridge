// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ArrayHelper {
    function is_in_array(address[] storage joined, address target) internal view returns(bool)  {
        for(uint i = 0; i < joined.length; i++) {
            if (joined[i] == target) return true;
        }

        return false;
    }

    function remove_from_array(address[] storage joined, address target) internal {
        for(uint i = 0; i < joined.length; i++) {
            if (joined[i] == target) {
                joined[i] = joined[joined.length - 1];
                joined.pop();
            }
        }
    }
}

contract Members  {

    address[] joined;
    mapping(address => address[]) send_to_from;
    mapping(address => address[]) send_from_to;

    function get_joined() public view returns(address[] memory) {
        return joined;
    }

    function get_tx_to(address to) public view returns(address[] memory) {
        return send_to_from[to];
    }

    function get_tx_from(address from) public view returns(address[] memory) {
        return send_from_to[from];
    }
}

contract Bridge is Members, ArrayHelper  {

    IERC20 public bridge_coin;
    uint constant public bridge_amount = 1;
    mapping(address => uint) public balances;

    constructor(address coin) {
        bridge_coin = IERC20(coin);
    }

    function deposit(uint units) public {
        bool res = bridge_coin.transferFrom(msg.sender, address(this), bridge_amount * units);
        require(res, "Not sufficient balance");

        if(balances[msg.sender] > 2 && !is_in_array(joined, msg.sender)) {
            joined.push(msg.sender);
        }

        balances[msg.sender] += units;
    }

    function send_from_balance(address to) public {
        
        require(balances[msg.sender] > 2, "Not sufficient balance");

        send_to_from[to].push(msg.sender);
        send_from_to[msg.sender].push(to);
        balances[msg.sender] -= 1;

        bridge_coin.transfer(to, bridge_amount);

        if(balances[msg.sender] == 2) {
            remove_from_array(joined, msg.sender);
        }
    }

    function send_from_acc(address to) public {
        bool res = bridge_coin.transferFrom(msg.sender, address(this), bridge_amount);
        require(res, "Not sufficient balance");

        send_to_from[to].push(msg.sender);
        send_from_to[msg.sender].push(to);

        bridge_coin.transfer(to, bridge_amount);
    }

}