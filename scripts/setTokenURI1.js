const { ethers } = require("hardhat");

async function main() {
    const deployedContractAddress = "0x47dF6fe27E7280F7AB961ecEd4b83345D285D285";

    const [deployer] = await ethers.getSigners();

    const ProofOfDonationNFT1 = await ethers.getContractFactory("ProofOfDonationNFT1");
    const proofOfDonationNFT1 = await ProofOfDonationNFT1.attach(deployedContractAddress);

    // The token ID to set URI for
    const tokenId = 1; // Replace with the actual token ID
    const newURI = "https://ipfs.filebase.io/ipfs/QmUHdFw6ZUudwoWeVDRWTcHvqdWHrmsfAxGQhDz9zS9ZUp"; // The new URI for the token

    // Setting the token URI
    const tx = await proofOfDonationNFT1.setTokenURI(tokenId, newURI);
    await tx.wait();

    console.log(`Token URI for token ID ${tokenId} set to ${newURI}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
