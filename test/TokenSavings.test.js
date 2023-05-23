const { expect } = require("chai");

describe("Token Savings Test", function () {
    it("should save a token", async function () {
        const [owner, user1, user2, user3] = await ethers.getSigners();

        const FoodCoin = await ethers.getContractFactory("FoodCoin");
        const contractFoodCoin = await FoodCoin.deploy();

        const TokenSavings = await ethers.getContractFactory("TokenSavings");
        const contractTokenSavings = await TokenSavings.deploy(contractFoodCoin.address);

        // mint new ERC20 tokens to user1
        await contractFoodCoin
            .connect(user1)
            .freeMint(user1.address, '1000000000000000000000');

        // approve TokenSavings contract to spend user1 tokens
        await contractFoodCoin
            .connect(user1)
            .approve(contractTokenSavings.address, '2000000000000000000000')

        await contractTokenSavings
            .connect(user1)
            .save('1000000000000000000000');

        await contractTokenSavings
            .connect(user1)
            .save('1000000000000000000000');

        await contractTokenSavings
            .connect(owner)
            .withdraw();

        const balUser1 = await contractFoodCoin.balanceOf(user1.address)
        console.log({ balUser1 })
    })

})