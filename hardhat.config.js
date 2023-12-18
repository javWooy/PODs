require("dotenv").config();
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.20",
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    rskTestnet: {
      url: "https://public-node.testnet.rsk.co",
      chainId: 31,  // RSK Testnet's chain ID
      gasPrice: 60000000, // Default gas price in wei (60 Gwei)
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};
