const express = require('express');
const { ethers, Wallet } = require('ethers');

const router = express.Router();

const ERC1155 = require('../artifacts/contracts/dnftERC1155.sol/MyERC1155.json');
const URL = process.env.JSON_RPC_PROVIDER;
const privateKey = process.env.PRIVATE_KEY;
const account = process.env.PUBLIC_KEY;

router.post('/', async (req, res, next) => {
    const { seriesInfo, baseURI } = req.body;
    try {
        const provider = new ethers.providers.JsonRpcProvider(URL);
        const contractAddress = process.env.CONTRACT_ADDRESS;
        const contract = new ethers.Contract(contractAddress, ERC1155.abi, provider);
        const wallet = new Wallet(privateKey).connect(provider);
        const contractWithSigner = contract.connect(wallet);

        const amount = seriesInfo.quantity;
        const URIs = [];
        // 이 숫자 동적으로 추가해야함.
        const seriesNFTCount = 5;
        const ipfsBaseURI = baseURI.replace('https://c6b8e7180c3c42db758973559ad7f50d.ipfscdn.io/ipfs/', '');
        for (let i = 0; i < seriesNFTCount; i++) {
            URIs.push(`${ipfsBaseURI}/${i}`);
        }
        console.log(URIs);

        const estimatedGas = await contractWithSigner.estimateGas.mintSeries(
            account,
            seriesInfo.series,
            amount,
            URIs,
            '0x'
        );
        const tx = await contractWithSigner.mintSeries(account, seriesInfo.series, amount, URIs, '0x', {
            gasLimit: estimatedGas,
        });

        console.log(tx.toString());
        res.status(200).json({
            log: 'mint-series success',
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({
            log: 'mint-series error',
        });
    }
});

module.exports = router;
