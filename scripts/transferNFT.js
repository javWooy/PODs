const { ethers } = require("hardhat");

async function main() {
    const deployedContractAddress = "0x7f8C4cF124094B083674B0547E9Bde45270E4958"; // Replace with your contract's address
    const [sender, receiver] = await ethers.getSigners(); // Get sender and receiver signers

    // Parameters for the NFT transfer
    const tokenId = 1; // Replace with the token ID you want to transfer
    const amount = 1; // Replace with the amount of the token to transfer
    const toAddress = '0x929b9385A5b6Cb673778F68772DE05F9Ff6bb337'; // Replace with the receiver's address

    // Getting a contract instance of ProofOfDonationNFT at the deployed address
    const ProofOfDonationNFT = await ethers.getContractFactory("ProofOfDonationNFT");
    const proofOfDonationNFT = await ProofOfDonationNFT.attach(deployedContractAddress);

    // Performing the safe transfer
    const tx = await proofOfDonationNFT.connect(sender).safeTransferFrom(sender.address, toAddress, tokenId, amount, ethers.utils.toUtf8Bytes(""));
    await tx.wait();

    console.log(`Transferred ${amount} of token ID ${tokenId} from ${sender.address} to ${toAddress}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
