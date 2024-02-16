import { ethers, upgrades } from "hardhat";

async function main(): Promise<void> {
  const HighRunTokenV1 = await ethers.getContractFactory("HighRunTokenV1");
  console.log("Deploying HighRunTokenV1...");
  const contract = await upgrades.deployProxy(HighRunTokenV1, ["0x74B76eEde2291f17f1597018aB45C3272c3E106A"], {
    initializer: "initialize",
    kind: "transparent",
  });
  await contract.waitForDeployment();
  console.log("HighRunTokenV1 deployed to:", contract.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
