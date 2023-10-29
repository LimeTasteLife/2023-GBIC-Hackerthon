const express = require('express');
const { ethers, Wallet } = require('ethers');

const router = express.Router();

const ERC1155 = require('../artifacts/contracts/dnftERC1155.sol/MyERC1155.json');
const URL = process.env.JSON_RPC_PROVIDER;
const privateKey = process.env.PRIVATE_KEY;
const admin = process.env.PUBLIC_KEY;

router.post('/', async (req, res, next) => {
    const { address } = req.body;
    const seriesId = req.body['series-id'];
    // console.log(address, seriesId);
    try {
        const provider = new ethers.providers.JsonRpcProvider(URL);
        const contractAddress = process.env.CONTRACT_ADDRESS;
        const contract = new ethers.Contract(contractAddress, ERC1155.abi, provider);
        const wallet = new Wallet(privateKey).connect(provider);
        const contractWithSigner = contract.connect(wallet);

        // 이미 참여하고 있으면 참여 못하게는 어떻게?

        const estimatedGas = await contractWithSigner.estimateGas.safeTransferFrom(
            admin,
            address,
            seriesId * 10,
            1,
            '0x'
        );

        const tx = await contractWithSigner.safeTransferFrom(admin, address, seriesId * 10, 1, '0x', {
            gasLimit: estimatedGas,
        });

        // console.log(tx.hash);
        res.status(200).json({
            log: 'participate success',
            txHash: tx.hash,
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({
            log: 'participate-series error',
        });
    }
});

module.exports = router;
