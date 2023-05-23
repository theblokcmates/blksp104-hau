// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FoodCoin is ERC20 {
    constructor() ERC20("Food Coin", "FOOD") {
        _mint(msg.sender, 1000000000000000000000);
    }
    function freeMint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}
