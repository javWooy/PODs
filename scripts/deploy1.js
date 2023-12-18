async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
    const ProofOfDonationNFT1 = await ethers.getContractFactory("ProofOfDonationNFT1");
    const proofOfDonationNFT1 = await ProofOfDonationNFT1.deploy();
  
    console.log("ProofOfDonationNFT1 deployed to:", proofOfDonationNFT1.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  