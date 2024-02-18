import { ethers, upgrades } from "hardhat";

const contractAddress = process.env.PROXY_CONTRACT_ADDRESS;

async function main() {
  if (!contractAddress) throw new Error('스마트 계약 주소가 설정되지 않았습니다.');

  const ChoYangHoV2 = await ethers.getContractFactory("ChoYangHoV2");
  console.log("Upgrading ChoYangHoV1 -> ChoYangHoV2 ...");

  await upgrades.upgradeProxy(contractAddress, ChoYangHoV2);
  console.log("ChoYangHoV2 upgraded");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
