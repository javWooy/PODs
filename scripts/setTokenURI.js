const { ethers } = require("hardhat");

async function main() {
    const deployedContractAddress = "0x7f8C4cF124094B083674B0547E9Bde45270E4958";

    const [deployer] = await ethers.getSigners();

    const ProofOfDonationNFT = await ethers.getContractFactory("ProofOfDonationNFT");
    const proofOfDonationNFT = await ProofOfDonationNFT.attach(deployedContractAddress);

    // The token ID to set URI for
    const tokenId = 1; // Replace with the actual token ID
    const newURI = "https://ipfs.filebase.io/ipfs/QmUHdFw6ZUudwoWeVDRWTcHvqdWHrmsfAxGQhDz9zS9ZUp"; // The new URI for the token

    // Setting the token URI
    const tx = await proofOfDonationNFT.setTokenURI(tokenId, newURI);
    await tx.wait();

    console.log(`Token URI for token ID ${tokenId} set to ${newURI}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
