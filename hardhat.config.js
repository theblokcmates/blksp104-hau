require('dotenv').config()
require("@nomicfoundation/hardhat-toolbox");

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
  networks: {
    hardhat: {
      accounts: {
        accountsBalance: '100000000000000000000'
      }
    },
  }
};
