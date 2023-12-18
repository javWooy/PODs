const { ethers } = require("hardhat");

async function main() {
    // Replace with your contract's deployed address
    const deployedContractAddress = '0x47dF6fe27E7280F7AB961ecEd4b83345D285D285';

    // The account you want to send a transaction from
    const [deployer] = await ethers.getSigners();

    // Getting a contract instance of ProofOfDonationNFT1 at the deployed address
    const ProofOfDonationNFT1 = await ethers.getContractFactory("ProofOfDonationNFT1");
    const proofOfDonationNFT1 = await ProofOfDonationNFT1.attach(deployedContractAddress);

    // Parameters for the mintBatch function
    const toAddress = deployer.address; // The address to receive the NFTs
    const tokenIds = [4, 5, 6]; // Array of token IDs to mint
    const amounts = [4, 5, 6]; // Corresponding amounts for each token ID
    const newURIs = [
      "https://ipfs.filebase.io/ipfs/QmS1i1J58fcM89oPcL9yJiNAtvwitWiGVsREGL3cP24Kg8", 
      "https://ipfs.filebase.io/ipfs/QmSxMpwYhvZpPxGsTWoFyvVuW1CnXH4JFGR9KHQTC239uZ",
      'https://ipfs.filebase.io/ipfs/QmUHdFw6ZUudwoWeVDRWTcHvqdWHrmsfAxGQhDz9zS9ZUp'
    ]; // URIs for each token
    const data = ethers.utils.toUtf8Bytes(""); // Additional data (if needed)

    // Minting tokens in a batch
    const tx = await proofOfDonationNFT1.mintBatch(toAddress, tokenIds, amounts, newURIs, data);
    await tx.wait();

    console.log(`Batch minted tokens to ${toAddress}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
