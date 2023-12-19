require("dotenv").config();
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.20",
  networks: {
    rskTestnet: {
      url: "https://public-node.testnet.rsk.co",
      chainId: 31,
      gasPrice: 60000000,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    rskMainnet: {
      url: "https://public-node.rsk.co",
      chainId: 30,  // RSK Mainnet's chain ID
      // Gas price is set dynamically. You can also set a fixed gasPrice if needed
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
