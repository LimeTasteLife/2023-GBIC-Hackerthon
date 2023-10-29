import { ethers } from 'hardhat';
const contractAddress = process.env.ERC1155!;
const account = process.env.PUBLIC_KEY!;

const URIs = [
    'QmPx8f2LPLZMWGWdcyM3dUyrvYSqw9E2KTpj7ZQU7DxQRg/series1/0',
    'QmPx8f2LPLZMWGWdcyM3dUyrvYSqw9E2KTpj7ZQU7DxQRg/series1/1',
    'QmPx8f2LPLZMWGWdcyM3dUyrvYSqw9E2KTpj7ZQU7DxQRg/series1/2',
    'QmPx8f2LPLZMWGWdcyM3dUyrvYSqw9E2KTpj7ZQU7DxQRg/series1/3',
    'QmPx8f2LPLZMWGWdcyM3dUyrvYSqw9E2KTpj7ZQU7DxQRg/series1/4',
    'QmPx8f2LPLZMWGWdcyM3dUyrvYSqw9E2KTpj7ZQU7DxQRg/series2/0',
    'QmPx8f2LPLZMWGWdcyM3dUyrvYSqw9E2KTpj7ZQU7DxQRg/series2/1',
];

async function mintSeries(contractAddress: string, account: string, seriesId: number, amount: number, uris: string[]) {
    const Erc1155 = await ethers.getContractFactory('MyERC1155');
    const erc1155 = await Erc1155.attach(contractAddress);

    // 가스 추정
    const estimatedGas = await erc1155.estimateGas.mintSeries(account, seriesId, amount, uris, '0x');

    // 추정된 가스를 사용하여 트랜잭션 전송
    const setURI = await erc1155.mintSeries(account, seriesId, amount, uris, '0x', {
        gasLimit: estimatedGas,
    });

    console.log('setURI :', setURI);
}

const URI1 = URIs.slice(0, 5);
const URI2 = URIs.slice(5, 7);

mintSeries(contractAddress, account, 1, 500, URI1).catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

mintSeries(contractAddress, account, 2, 500, URI1).catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
