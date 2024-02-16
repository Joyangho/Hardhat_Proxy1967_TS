import { ethers, upgrades } from "hardhat";

const PROXY = "0xc27F20f85537d0f989090637ad845e45900a7873";

async function main(): Promise<void> {
  const HighRunTokenV2 = await ethers.getContractFactory("HighRunTokenV2");
  await upgrades.upgradeProxy(PROXY, HighRunTokenV2);
  console.log("HighRunTokenV2 upgraded");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
