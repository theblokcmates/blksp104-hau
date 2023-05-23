require('dotenv').config()
require("@nomicfoundation/hardhat-toolbox");

const ETHERSCAN_API_KEY = '';
const SEPOLIA_JSON_RPC_URL = '';
const ACCOUNT_PRIVATE_KEY = '';

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  gasReporter: {
    enabled: false
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  networks: {
    sepolia: {
      url: SEPOLIA_JSON_RPC_URL,
      accounts: [ACCOUNT_PRIVATE_KEY]
    },
    hardhat: {
      accounts: {
        accountsBalance: '100000000000000000000'
      }
    },
  }
};
