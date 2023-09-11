import { ethers } from 'hardhat';

async function main() {
  const nftAddr = '0x25D0e89E6Df7ae8C0E8D1D9Bd0991CbE17d10628';
  const to = '0xE03F2A5b69BFD890bf5aF88c8b2a73416fA3F9Af';
  const tokenURI = 'ipfs://QmWAuhC8LdpbzLa4RHjx1jN8j5RwGQpkcsmfPxNmMeHnad';

  const nftContract = await ethers.getContractAt('INnft', nftAddr);

  await nftContract.mint(to, tokenURI);

  //   console.log(mint);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
