// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AngelNFT is ERC721("Angel NFT", "ANGEL"), Ownable {
    uint256 tokenId = 1;
    function freeMint() onlyOwner public {
        _mint(msg.sender, tokenId);
        tokenId++;
    }
    function tokenURI(uint256) override pure public returns (string memory) {
        // return "https://metadata.server/{id}"
        return "data:application/json;base64,ewogICJuYW1lIjogIkFuZ2VsIE5GVCIsCiAgImRlc2NyaXB0aW9uIjogIkRlc2NyaXB0aW9uIG9mIEFuZ2VsIE5GVCIsCiAgImltYWdlIjogImh0dHBzOi8vaWhlYXJ0Y3JhZnR5dGhpbmdzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMi8wMS84LTE4LmpwZyIKfQ==";
    }
}