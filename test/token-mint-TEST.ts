/*
1. mint 함수이며 10 ** 18 처리했으므로 전송 시 개수만 입력하면 됨.
2. toAddress, amount
3. only owner 지갑만 발행 가능
*/

import { ethers } from 'hardhat';

async function main() {
    try {
        // 배포된 스마트 계약의 주소 환경 변수로부터 가져오기
        const contractAddress = process.env.PROXY_CONTRACT_ADDRESS;
        if (!contractAddress) throw new Error('스마트 계약 주소가 설정되지 않았습니다.');

        // 배포된 스마트 계약의 인스턴스 생성
        const HighRunTokenV2 = await ethers.getContractAt('HighRunTokenV2', contractAddress);

        // 발행 대상 주소와 전송할 토큰 양 설정
        const toAddress = '0x74B76eEde2291f17f1597018aB45C3272c3E106A'; // 전송할 대상 주소
        const amount = ethers.parseEther('100000'); // 전송할 토큰 양 (실제 토큰 수량)

        // 오직 소유자만이 발행 함수 호출 가능
        const owner = await HighRunTokenV2.owner();
        if (owner !== process.env.OWNER_WALLET_ADDRESS) {
            throw new Error('오너 지갑만 발행 가능합니다.');
        }

        // 발행 함수 호출
        const mint = await HighRunTokenV2.mint(toAddress, amount);

        // 트랜잭션이 포함된 블록을 기다립니다.
        await mint.wait();

        console.log(`Mint 성공 ${amount.toString()} HRUN tokens to ${toAddress}`);
    } catch (error: any) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

// main 함수 실행
main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
