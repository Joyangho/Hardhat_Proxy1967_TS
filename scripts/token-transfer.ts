import { ethers } from 'hardhat';

async function main() {
    // 배포된 스마트 계약의 주소
    const contractAddress = '0xc27F20f85537d0f989090637ad845e45900a7873'; // 배포된 스마트 계약의 주소로 변경해야 합니다.

    // 배포된 스마트 계약의 인스턴스 생성
    const HighRunTokenV2 = await ethers.getContractAt('HighRunTokenV2', contractAddress);

    // 전송할 대상 주소와 전송할 토큰 양 설정
    const toAddress = '0x780861E592665A3202F27A37616A3Dc2231e2831'; // 전송할 대상 주소
    const amount = '10000000000000000000' // 전송할 토큰 양 (1 ETH = '1')

    // 전송 함수 호출
    const tx = await HighRunTokenV2.transfer(toAddress, amount);
    const tx2 = await HighRunTokenV2.transfer(toAddress, amount);
    const tx3 = await HighRunTokenV2.transfer(toAddress, amount);

    // 트랜잭션이 포함된 블록을 기다립니다.
    await tx.wait();
    console.log(`첫번째 전송시작 ${amount.toString()} HRUN tokens to ${toAddress}`)
    await tx2.wait();
    console.log(`두번째 전송시작 ${amount.toString()} HRUN tokens to ${toAddress}`)
    await tx3.wait();
    console.log(`세번째 전송시작 ${amount.toString()} HRUN tokens to ${toAddress}`)
}

// main 함수 실행
main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
