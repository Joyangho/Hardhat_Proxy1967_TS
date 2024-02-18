import { ethers, upgrades } from "hardhat";

async function main() {
  const ChoYangHoV1 = await ethers.getContractFactory("ChoYangHoV1");
  console.log("Deploying ChoYangHoV1...");
  const V1 = await upgrades.deployProxy(ChoYangHoV1, ["0x74B76eEde2291f17f1597018aB45C3272c3E106A"], {
    initializer: "initialize",
    kind: "transparent",
  });
  await V1.waitForDeployment();
  console.log("ChoYangHoV1 deployed to:", V1.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
