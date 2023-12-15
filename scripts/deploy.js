async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
    const ProofOfDonationNFT = await ethers.getContractFactory("ProofOfDonationNFT");
    const proofOfDonationNFT = await ProofOfDonationNFT.deploy();
  
    console.log("ProofOfDonationNFT deployed to:", proofOfDonationNFT.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  