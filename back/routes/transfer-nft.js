const express = require('express');
const { ethers, Wallet } = require('ethers');

const router = express.Router();

const ERC1155 = require('../artifacts/contracts/dnftERC1155.sol/MyERC1155.json');
const URL = process.env.JSON_RPC_PROVIDER;
const privateKey = process.env.PRIVATE_KEY;
const admin = process.env.PUBLIC_KEY;

router.post('/', async (req, res, next) => {
    const { address, series, stamp } = req.body;
    // console.log(address, series, stamp);
    try {
        const provider = new ethers.providers.JsonRpcProvider(URL);
        const contractAddress = process.env.CONTRACT_ADDRESS;
        const contract = new ethers.Contract(contractAddress, ERC1155.abi, provider);
        const wallet = new Wallet(privateKey).connect(provider);
        const contractWithSigner = contract.connect(wallet);

        const checkParticipated = await contractWithSigner.balanceOf(address, series * 10);
        if (checkParticipated.toString() !== '0') {
            const estimatedGas = await contractWithSigner.estimateGas.safeTransferFrom(
                admin,
                address,
                series * 10 + stamp,
                1,
                '0x'
            );

            const tx = await contractWithSigner.safeTransferFrom(admin, address, series * 10 + stamp, 1, '0x', {
                gasLimit: estimatedGas,
            });

            // console.log(tx.hash);
            res.status(200).json({
                log: 'transfer-nft(stamp) success',
                txHash: tx.hash,
            });
        } else {
            res.status(233).json({
                log: 'need to participate series first',
            });
        }
    } catch (err) {
        console.error(err);
        res.status(400).json({
            log: 'transfer-nft(stamp) error',
        });
    }
});

module.exports = router;
