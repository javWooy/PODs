const { ethers } = require("hardhat");

async function main() {
  // Replace with your contract's deployed address
  const deployedContractAddress = '0x4e6a21E0521340899824180B9a99E6A6946BD0b7';

  // The account you want to send a transaction from
  const [deployer] = await ethers.getSigners();

  // Getting a contract instance of ProofOfDonationNFT at the deployed address
  const ProofOfDonationNFT = await ethers.getContractFactory("ProofOfDonationNFT");
  const proofOfDonationNFT = await ProofOfDonationNFT.attach(deployedContractAddress);

  // Parameters for the mintBatch function
  const toAddress = deployer.address; // The address to receive the NFTs
  const tokenIds = [1, 2, 3];         // Array of token IDs to mint
  const amounts = [1, 1, 1];       // Corresponding amounts for each token ID
  const data = ethers.utils.toUtf8Bytes(""); // Additional data (if needed)

  // Minting tokens in a batch
  const tx = await proofOfDonationNFT.mintBatch(toAddress, tokenIds, amounts, data);
  await tx.wait();

  console.log(`Batch minted tokens to ${toAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
