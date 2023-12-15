// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ProofOfDonationNFT is ERC1155, Ownable, ReentrancyGuard {
    // Mapping from token ID to the URI
    mapping(uint256 => string) private _tokenURIs;

    constructor() ERC1155("https://token-cdn-domain/{id}.json") {
        // Constructor can be used to mint initial batches if necessary
    }

    // Override the uri function to return the full URI for each token
    function uri(uint256 tokenId) override public view returns (string memory) {
        return _tokenURIs[tokenId];
    }

    // A secure mint function that prevents reentrancy attacks
    function mint(address to, uint256 tokenId, uint256 amount, bytes memory data) 
        public onlyOwner nonReentrant {
        require(to != address(0), "ProofOfDonationNFT: mint to the zero address");
        require(amount > 0, "ProofOfDonationNFT: mint amount must be positive");

        _mint(to, tokenId, amount, data);
        emit Minted(to, tokenId, amount);
    }

    // A secure mintBatch function that prevents reentrancy attacks
    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data) 
        public onlyOwner nonReentrant {
        require(to != address(0), "ProofOfDonationNFT: mint to the zero address");
        require(ids.length == amounts.length, "ProofOfDonationNFT: ids and amounts length mismatch");

        _mintBatch(to, ids, amounts, data);
        emit MintedBatch(to, ids, amounts);
    }

    // Function to set the URI for a specific token ID
    function setTokenURI(uint256 tokenId, string memory newURI) public onlyOwner {
        require(bytes(newURI).length > 0, "ProofOfDonationNFT: URI should be set");
        _tokenURIs[tokenId] = newURI;
        emit URI(newURI, tokenId);
    }

    // Function to set the same URI for a batch of token IDs
    function setBatchTokenURI(uint256[] memory tokenIds, string memory newURI) public onlyOwner {
        require(bytes(newURI).length > 0, "ProofOfDonationNFT: URI should be set");
        for (uint256 i = 0; i < tokenIds.length; i++) {
            _tokenURIs[tokenIds[i]] = newURI;
            emit URI(newURI, tokenIds[i]);
        }
    }

    // Events for logging actions on the blockchain
    event Minted(address indexed to, uint256 indexed tokenId, uint256 amount);
    event MintedBatch(address indexed to, uint256[] ids, uint256[] amounts);

    // Additional functions like burn and burnBatch could be added for token management

    // ... additional code for more complex logic or features ...
}
