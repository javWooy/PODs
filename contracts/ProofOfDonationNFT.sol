// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ProofOfDonationNFT is ERC1155, Ownable {
    mapping(uint256 => string) private _tokenURIs;

     // Contract name
    string public name;
    // Contract symbol
    string public symbol;


    constructor(string memory _name, string memory _symbol) ERC1155("https://token-cdn-domain/{id}.json") Ownable(msg.sender) {
        // Constructor logic if needed
        name = _name;
        symbol = _symbol;
    }

    // Override the uri function to return the full URI for each token
    function uri(uint256 tokenId) public view override returns (string memory) {
        return _tokenURIs[tokenId];

    }

    // Modified mintBatch function to include URI setting
    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, string[] memory newURIs, bytes memory data) 
        public onlyOwner {
        require(to != address(0), "ProofOfDonationNFT: mint to the zero address");
        require(ids.length == amounts.length, "ProofOfDonationNFT: ids and amounts length mismatch");
        require(ids.length == newURIs.length, "ProofOfDonationNFT: ids and URIs length mismatch");

        _mintBatch(to, ids, amounts, data);

        for (uint256 i = 0; i < ids.length; i++) {
            setTokenURI(ids[i], newURIs[i]);  // Set the token URI for each id
        }

        emit MintedBatch(to, ids, amounts);
    }

    // Function to set the URI for a specific token ID
    function setTokenURI(uint256 tokenId, string memory newURI) public onlyOwner {
        require(bytes(newURI).length > 0, "ProofOfDonationNFT: URI should be set");
        _tokenURIs[tokenId] = newURI;
        emit URI(newURI, tokenId);
    }

    // Events for logging actions on the blockchain
    event MintedBatch(address indexed to, uint256[] ids, uint256[] amounts);
}
