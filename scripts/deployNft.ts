import { ethers } from 'hardhat';

async function main() {
  const Nnft = await ethers.deployContract('Nnft');

  await Nnft.waitForDeployment();

  console.log(`Nft contract deployed to ${Nnft.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
