import { ethers } from 'hardhat';
const contractAddress = process.env.ERC1155!;
async function safeTransferFrom(
  from: string,
  to: string,
  id: number,
  amount: number
) {
  console.log('transfer from ERC1155 contract');
  const Erc1155 = await ethers.getContractFactory('MyERC1155');
  const erc1155 = await Erc1155.attach(contractAddress);
  const transfer = await erc1155.safeTransferFrom(from, to, id, amount, '0x');
  console.log('transfer :', transfer);
}

safeTransferFrom(
  process.env.PUBLIC_KEY!,
  process.env.TEST_PUBLIC_KEY!,
  0,
  10
).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
