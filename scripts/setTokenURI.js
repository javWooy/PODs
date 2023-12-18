const { ethers } = require("hardhat");

async function main() {
  const deployedContractAddress = "0xC715d092d1292DA20643BE396f2f8051Cab82970";

  const [deployer] = await ethers.getSigners();

  const ProofOfDonationNFT = await ethers.getContractFactory("ProofOfDonationNFT");
  const proofOfDonationNFT = await ProofOfDonationNFT.attach(deployedContractAddress);

  // Array of token IDs to set URI for
  const tokenIds = [1, 2, 3]; // Replace with actual token IDs
  const newURI = "https://ipfs.filebase.io/ipfs/QmUHdFw6ZUudwoWeVDRWTcHvqdWHrmsfAxGQhDz9zS9ZUp"; // The new URI for all tokens

  // Setting the same URI for a batch of token IDs
  const tx = await proofOfDonationNFT.setBatchTokenURI(tokenIds, newURI);
  await tx.wait();

  console.log(`Token URI set for token IDs ${tokenIds.join(", ")} to ${newURI}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
