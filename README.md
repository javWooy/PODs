# PODs

# Proof of Donation NFTs

## Overview
The Proof of Donation NFT project utilizes smart contracts on the Rootstock blockchain to create and manage a unique type of NFT (Non-Fungible Token). These tokens represent proofs of donations, leveraging the ERC1155 token standard for efficient multi-token management.

## Features
- **Smart Contract (ProofOfDonationNFT.sol)**: Implements a custom ERC1155 smart contract to mint, manage, and set URIs for tokens.
- **Deployment Script**: Facilitates deploying the smart contract to the Ethereum network.
- **Minting Script**: Enables the minting of new tokens with unique IDs and metadata.
- **Set Token URI Script**: Allows setting or updating the metadata URI for each token.

## Usage
### Deployment
Deploy the smart contract using:
```bash
npx hardhat run scripts/deploy.js --network rskTestnet
```

### Minting Tokens
Mint new tokens by running:
```bash
npx hardhat run scripts/mint.js --network rskTestnet
```

### Setting/editing Token URIs
Update the token URIs using:
```bash
npx hardhat run scripts/setTokenURI.js --network rskTestnet
```

## Configuration
Configure the project settings in `hardhat.config.js`, including network settings and other parameters.

