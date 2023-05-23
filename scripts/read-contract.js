const hre = require("hardhat");

const artifact = require('../artifacts/contracts/HelloSolidity.sol/HelloSolidity.json')
async function main() {

    const SEPOLIA_JSON_RPC_URL = '';

    const provider = new hre.ethers.providers.JsonRpcProvider(SEPOLIA_JSON_RPC_URL)
    const contract = new hre.ethers.Contract('0x3a2f517f1dc0c544e055be50722c31a2d1bce290', artifact.abi, provider)
    const response = await contract.getMessage(3)

    console.log('>>>', response)
}

main()