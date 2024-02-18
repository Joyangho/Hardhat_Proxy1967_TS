import { ethers } from 'hardhat';

async function main() {
    try {
        const contractAddress = process.env.PROXY_CONTRACT_ADDRESS;
        if (!contractAddress) throw new Error('스마트 계약 주소가 설정되지 않았습니다.');

        const ChoYangHoV2 = await ethers.getContractAt('ChoYangHoV2', contractAddress);

        // multiTransfer 함수 호출
        const recipients = [
            '0x780861E592665A3202F27A37616A3Dc2231e2831',
            '0x780861E592665A3202F27A37616A3Dc2231e2831',
            '0x780861E592665A3202F27A37616A3Dc2231e2831'
        ];
        const amounts = [
            ethers.parseEther('10'),
            ethers.parseEther('10'),
            ethers.parseEther('10')
        ];

        const multiTransferTx = await ChoYangHoV2.multiTransfer(recipients, amounts);
        await multiTransferTx.wait();
        console.log(`전송주소: ${recipients}`);
        console.log(`전송량: ${amounts}`);
        console.log(`다중 전송 완료`);
    } catch (error: any) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
