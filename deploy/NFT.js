const { ethers } = require("hardhat");

async function main() {
  const Lock = await ethers.getContractFactory("NftWhitelistSaleMerkle");
  const lock = await Lock.deploy(40000, "0xf69186dfBa60DdB133E91E9A4B5673624293d8F8");

  await lock.deployed();

  console.log(
    ` deployed to ${lock.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});