require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-verify");

module.exports = {
  solidity: "0.8.22",
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
  sourcify: {
    enabled: true
  },

  etherscan: {
    apiKey: {
      rskTestnet: '${process.env.ETHERSCAN_APIKEY}'
    },
    customChains: [
      {
        network: "rskTestnet",
        chainId:31,
        urls: {
          apiURL: "https://rootstock-testnet.blockscout.com/api",
          browserURL: "https://rootstock-testnet.blockscout.com/"
        }
      }
    ]
  }
};
