const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ProofOfDonationNFT", function () {
  let ProofOfDonationNFT;
  let proofOfDonationNFT;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    ProofOfDonationNFT = await ethers.getContractFactory("ProofOfDonationNFT");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    // Deploy a new ProofOfDonationNFT contract for each test.
    proofOfDonationNFT = await ProofOfDonationNFT.deploy();
    await proofOfDonationNFT.deployed();
  });

  // Test case
  describe("deployment", function () {
    it("Should set the right owner", async function () {
      expect(await proofOfDonationNFT.owner()).to.equal(owner.address);
    });

    it("Should mint a new token and assign it to owner", async function () {
      const mintTx = await proofOfDonationNFT.mint(owner.address, 1, 1, []);
      await mintTx.wait();

      const balance = await proofOfDonationNFT.balanceOf(owner.address, 1);
      expect(balance).to.equal(1);
    });
  });

  // More tests can be added here
});
