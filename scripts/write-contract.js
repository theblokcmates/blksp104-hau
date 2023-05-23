


const hre = require("hardhat");
const artifact = require('../artifacts/contracts/HelloSolidity.sol/HelloSolidity.json')
async function main() {
    const SEPOLIA_JSON_RPC_URL = '';
    const ACCOUNT_PRIVATE_KEY = '';

    const provider = new hre.ethers.providers.JsonRpcProvider(SEPOLIA_JSON_RPC_URL)
    const contract = new hre.ethers.Contract('0x3a2f517f1dc0c544e055be50722c31a2d1bce290', artifact.abi, provider)
    const wallet = new ethers.Wallet(ACCOUNT_PRIVATE_KEY, provider)
    const response = await contract.connect(wallet).storeMessage(3, 'blokc')
    console.log('>>>', response)
}

main()