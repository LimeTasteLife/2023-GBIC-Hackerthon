import { ethers } from 'hardhat';
const contractAddress = process.env.ERC1155;
const account = process.env.TEST_PUBLIC_KEY;

async function checkParticipated(contractAddress: string, account: string, seriesId: number) {
    const Erc1155 = await ethers.getContractFactory('MyERC1155');
    const erc1155 = await Erc1155.attach(contractAddress);
    const checkParticipated = await erc1155.balanceOf(account, seriesId);
    console.log('checkParticipated :', checkParticipated.toNumber());
}

checkParticipated(contractAddress!, account!, 10).catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
