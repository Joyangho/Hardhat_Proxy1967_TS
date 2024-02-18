import { ethers } from 'hardhat';

async function main() {
    try {
        const contractAddress = process.env.PROXY_CONTRACT_ADDRESS;
        if (!contractAddress) throw new Error('스마트 계약 주소가 설정되지 않았습니다.');

        const HighRunTokenV2 = await ethers.getContractAt('HighRunTokenV2', contractAddress);

        // to: '지갑주소', amount: '1' = 1 HRUN
        const mintForOwner = [
            { to: '0x780861E592665A3202F27A37616A3Dc2231e2831', amount: ethers.parseEther('1') },
            { to: '0x780861E592665A3202F27A37616A3Dc2231e2831', amount: ethers.parseEther('1') },
            { to: '0x780861E592665A3202F27A37616A3Dc2231e2831', amount: ethers.parseEther('1') }
        ];

        for (const { to, amount } of mintForOwner) {
            const tx = await HighRunTokenV2.mintForOwner(to, amount);
            await tx.wait();
            console.log(`전송 완료: ${amount} HRUN 토큰 to ${to}`);
        }
    } catch (error: any) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
