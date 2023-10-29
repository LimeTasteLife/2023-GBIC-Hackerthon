import { ethers } from 'hardhat';
const contractAddress = process.env.ERC1155!;
async function mint(to: string, id: number, amount: number) {
  console.log('mint from erc1155 contract');
  const Erc1155 = await ethers.getContractFactory('MyERC1155');
  const erc1155 = await Erc1155.attach(contractAddress);
  const mint = await erc1155.mint(to, id, amount, '0x');
  console.log('mint :', mint);
}

const id = 0;
mint(process.env.PUBLIC_KEY!, id, 5).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
