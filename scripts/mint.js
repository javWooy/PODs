const { ethers } = require("hardhat");

async function main() {
    // Replace with your contract's deployed address
    const deployedContractAddress = '0x7f8C4cF124094B083674B0547E9Bde45270E4958';

    // The account you want to send a transaction from
    const [deployer] = await ethers.getSigners();

    // Getting a contract instance of ProofOfDonationNFT at the deployed address
    const ProofOfDonationNFT = await ethers.getContractFactory("ProofOfDonationNFT");
    const proofOfDonationNFT = await ProofOfDonationNFT.attach(deployedContractAddress);

    // Parameters for the mintBatch function
    const toAddress = deployer.address; // The address to receive the NFTs
    const tokenIds = [1, 2, 3]; // Array of token IDs to mint
    const amounts = [4, 5, 6]; // Corresponding amounts for each token ID
    const newURIs = [
      "https://ipfs.filebase.io/ipfs/QmS1i1J58fcM89oPcL9yJiNAtvwitWiGVsREGL3cP24Kg8", 
      "https://ipfs.filebase.io/ipfs/QmSxMpwYhvZpPxGsTWoFyvVuW1CnXH4JFGR9KHQTC239uZ",
      'https://ipfs.filebase.io/ipfs/QmUHdFw6ZUudwoWeVDRWTcHvqdWHrmsfAxGQhDz9zS9ZUp'
    ]; // URIs for each token
    const data = ethers.utils.toUtf8Bytes(""); // Additional data (if needed)

    // Minting tokens in a batch
    const tx = await proofOfDonationNFT.mintBatch(toAddress, tokenIds, amounts, newURIs, data);
    await tx.wait();

    console.log(`Batch minted tokens to ${toAddress}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
