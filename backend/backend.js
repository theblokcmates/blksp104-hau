const ethers = require('ethers');
const artifact = require('./FoodCoin.json')
const CONTRACT_ADDRESS = ""

const provider = new ethers.JsonRpcProvider('JSON_RPC_URL')
const contract = new ethers.Contract(CONTRACT_ADDRESS, artifact.abi, provider)
const wallet = new ethers.Wallet('PRIVATE_KEY', provider)

console.log(wallet.address)
async function main() {
    await contract
    .freeMint('0x3b42F938a4C3A0CC40CB69Bf4646bC4d8382224C', '2000000000000000000000')
    // const response = await contract.balanceOf('0xAba72FdecAe3C3B476e972599cbe8E29DC89dDBA');
    // console.log({ response })
}
main()




 