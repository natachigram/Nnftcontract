// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface INnft {
    function mint(address _to, string memory _tokenURI) external returns (uint256);
}