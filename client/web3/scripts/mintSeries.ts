import { ethers } from 'hardhat';
const contractAddress = process.env.ERC1155!;
const account = process.env.PUBLIC_KEY!;

const URIs = [
    'QmbJvDptQstq75CwLTRuBXnvfDNqgjJZWdtDxN7y8eHSuQ/0',
    'QmbJvDptQstq75CwLTRuBXnvfDNqgjJZWdtDxN7y8eHSuQ/1',
    'QmbJvDptQstq75CwLTRuBXnvfDNqgjJZWdtDxN7y8eHSuQ/2',
    'QmbJvDptQstq75CwLTRuBXnvfDNqgjJZWdtDxN7y8eHSuQ/3',
    'QmbJvDptQstq75CwLTRuBXnvfDNqgjJZWdtDxN7y8eHSuQ/4',
];

async function mintSeries(contractAddress: string, account: string, amount: number, uris: string[]) {
    const Erc1155 = await ethers.getContractFactory('MyERC1155');
    const erc1155 = await Erc1155.attach(contractAddress);

    // 현재 가스 가격을 가져옴
    const currentGasPrice = await ethers.provider.getGasPrice();

    // 현재 가스 가격에 10%를 추가함.
    const increasedGasPrice = currentGasPrice.add(currentGasPrice.mul(10).div(100));

    // 가스 추정
    // const estimatedGas = await erc1155.estimateGas.mintSeries(account, amount, uris, '0x');

    const rawEstimateGas = await erc1155.estimateGas.setURI(0, '1');
    const rawEstimateGas2 = await erc1155.estimateGas.mint(account, 0, 1, '0x');
    const estimatedGas = rawEstimateGas.add(rawEstimateGas2).toNumber() * uris.length;

    // 추정된 가스를 사용하여 트랜잭션 전송
    const mintSeries = await erc1155.mintSeries(account, amount, uris, '0x', {
        gasLimit: estimatedGas,
        gasPrice: increasedGasPrice, // 조절된 가스 가격을 설정
    });
    const receipt = await mintSeries.wait();

    const seriesId = await erc1155.getNextSeriesId();

    console.log('mintSeries Transaction:', mintSeries);
    console.log('Transaction Receipt:', receipt);
    console.log('Transaction Status (0 = failed, 1 = succeeded):', receipt.status);
    console.log('seriesId :', seriesId);
}

mintSeries(contractAddress, account, 500, URIs).catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
