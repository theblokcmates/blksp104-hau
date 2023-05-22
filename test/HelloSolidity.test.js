const { expect } = require("chai");

describe("Hello Solidity Test", function() {
    xit("should store a message", async function() {
        const HelloSolidity = await ethers.getContractFactory("HelloSolidity");
        const contract = await HelloSolidity.deploy("hello HAU");
        await contract.storeMessage(1, "hello The BLOKC!")

        const response = await contract.getMessage(1);
        expect(response).to.be.equal('hello The BLOKC!')
    })

    it("should return msg.sender", async function() {
        const HelloSolidity = await ethers.getContractFactory("HelloSolidity");
        const contract = await HelloSolidity.deploy("hello HAU");
        
        const [owner, user1, user2, user3] = await ethers.getSigners();
        // console.log('owner', owner.address);
        // console.log('user1', user1.address);

        const resp1 = await contract.connect(owner).logSender()
        const resp2 = await contract.connect(user1).logSender()
        console.log({ resp1, resp2 })
    })
})