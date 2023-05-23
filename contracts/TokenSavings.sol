// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TokenSavings {
    IERC20 token;
    mapping(address => uint256) savings;
    constructor(IERC20 erc20Address) {
        token = IERC20(erc20Address);
    }

    function save(uint256 amount) public {
        savings[msg.sender] += amount;
        token.transferFrom(msg.sender, address(this), amount);
    }

    function withdraw() public {
        require(savings[msg.sender] > 0, "User has no savings");
        uint256 amount = savings[msg.sender];
        token.transfer(msg.sender, amount);
        savings[msg.sender] = 0;
    }
}