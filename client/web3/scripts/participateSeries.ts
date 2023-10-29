import { ethers } from 'hardhat';
const contractAddress = process.env.ERC1155!;
async function setApprovalForAll(operator: string) {
    const Erc1155 = await ethers.getContractFactory('MyERC1155');
    const erc1155 = await Erc1155.attach(contractAddress);
    const transfer = await erc1155.setApprovalForAll(operator, true);
    console.log('transfer :', transfer);
}

setApprovalForAll(process.env.PUBLIC_KEY!).catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
