const { expect } = require("chai");

describe("NFT Test", function() {
    it("should mint an NFT", async function() {
        const AngelNFT = await ethers.getContractFactory("AngelNFT");
        const contract = await AngelNFT.deploy();
        const [owner, user1, user2, user3] = await ethers.getSigners();

        await contract
        .connect(owner)
        .freeMint()

        // will fail because of onlyOwner
        // await contract
        // .connect(user2)
        // .freeMint()

        const ownerOfToken1 = await contract.ownerOf(1)
        const balUser1 = await contract.balanceOf(user1.address)
        console.log({ ownerOfToken1 , balUser1 })

        const metadata = await contract.tokenURI(1)
        console.log(metadata)
    })
})