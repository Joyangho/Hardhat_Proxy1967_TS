# 체인 
- mumbai
------

# hardhat 설치
- npm install --save-dev hardhat

- npx hardhat

- npm install --save-dev @openzeppelin/contracts-upgradeable @openzeppelin/hardhat-upgrades dotenv

- npm install --save-dev @nomiclabs/hardhat-ethers -force

- npx hardhat compile
------

# 배포
- npx hardhat run scripts/deploy.ts --network mumbai
------

# 업그레이드
- npx hardhat run upgrade-contract.ts --network mumbai
------

# 함수 호출
- npx hardhat run scripts/token-xx.ts --network mumbai
------

# contracts
- ChoYangHoV1.sol = V1

- ChoYangHoV2.sol = V2

- ChoYangHoV3.sol = V3
------

# 프록시 계약 주소
- 프록시: 0x091efB6afe8E9e54d182Ff912F2aEddF55430556
- 구현: 0xfA356B0d3d6A41a94B013F2E0F2A46c10B468371
- 어드민: 0x07352d8ADdfa6507D7A9715676C82151ba354038