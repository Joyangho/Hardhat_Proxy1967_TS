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
- HighRunTokenV1.sol = V1

- HighRunTokenV2.sol = V2

- HighRunTokenV3.sol = V3
------

# 프록시 계약 주소
- 0xb86E94ec8C71820F3881aC56EBB081bcf5344481
