// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
// import "hardhat/console.sol";

error NotOwner();

contract HelloSolidity {
    address deployer;
    mapping(uint256 => string) messages;

    constructor(string memory initialMessage) {
        deployer = msg.sender;
        messages[0] = initialMessage;
    }

    function storeMessage(uint256 index, string memory message) public {
        if (msg.sender != deployer) {
            revert NotOwner();
        }
        // require(msg.sender == deployer, "Caller is not the owner");
        messages[index] = message;
    }

    function getMessage(uint256 index) public view returns (string memory) {
        return messages[index];
    }

    function logSender() public returns (address) {
        deployer = msg.sender;
        return msg.sender;
    }
}
