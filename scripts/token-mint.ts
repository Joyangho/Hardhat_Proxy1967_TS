/*
1. mint 함수이며 10 ** 18 처리했으므로 전송 시 개수만 입력하면 됨.
2. toAddress, amount
3. only owner 지갑만 발행 가능
*/

import { ethers } from 'hardhat';

async function main() {
    // 배포된 스마트 계약의 주소
    const contractAddress = '0xc27F20f85537d0f989090637ad845e45900a7873';

    // 배포된 스마트 계약의 인스턴스 생성
    const HighRunTokenV2 = await ethers.getContractAt('HighRunTokenV2', contractAddress);

    // 발행 대상 주소와 전송할 토큰 양 설정
    const toAddress = '0x74B76eEde2291f17f1597018aB45C3272c3E106A'; // 전송할 대상 주소
    const amount = '1000'; // 전송할 토큰 양 (1 HRUN = '1'), sol 함수에 * 10 ** 18을 했기 때문에 처리 x

    // 발행 함수 호출
    const mint = await HighRunTokenV2.mint(toAddress, amount);

    // 트랜잭션이 포함된 블록을 기다립니다.
    await mint.wait();

    console.log(`Mint 성공 ${amount.toString()} HRUN tokens to ${toAddress}`);
}

// main 함수 실행
main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
