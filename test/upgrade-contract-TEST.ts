import { ethers, upgrades } from "hardhat";

const contractAddress = process.env.PROXY_CONTRACT_ADDRESS;

async function main() {
  if (!contractAddress) throw new Error('스마트 계약 주소가 설정되지 않았습니다.');

  const HighRunTokenV2 = await ethers.getContractFactory("HighRunTokenV2");
  console.log("Upgrading HighRunTokenV1 -> HighRunTokenV2 ...");

  await upgrades.upgradeProxy(contractAddress, HighRunTokenV2);
  console.log("HighRunTokenV2 upgraded");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
