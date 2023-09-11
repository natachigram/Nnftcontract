// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Nnft is ERC721URIStorage, Ownable{
 
    uint128 public _tokenIds = 1;
constructor () ERC721("Nnft", "NNFT"){}

function mint(address _to, string memory _tokenURI) public onlyOwner returns (uint256)  {
        uint256 newNftId = _tokenIds;
        _mint(_to, newNftId);
        _setTokenURI(newNftId, _tokenURI);

        return newNftId;
}



}