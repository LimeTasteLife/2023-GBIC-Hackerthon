const express = require('express');
const { ethers, Wallet } = require('ethers');
const { User, Series, sequelize } = require('../models');

const router = express.Router();

const ERC1155 = require('../artifacts/contracts/dnftERC1155.sol/MyERC1155.json');
const URL = process.env.JSON_RPC_PROVIDER;
const privateKey = process.env.PRIVATE_KEY;
const admin = process.env.PUBLIC_KEY;

router.post('/', async (req, res, next) => {
    // 먼저 sequelize transaction 생성
    const seqTx = await sequelize.transaction();
    const { address, seriesId } = req.body;
    // console.log(address, seriesId);
    try {
        const provider = new ethers.providers.JsonRpcProvider(URL);
        const contractAddress = process.env.CONTRACT_ADDRESS;
        const contract = new ethers.Contract(contractAddress, ERC1155.abi, provider);
        const wallet = new Wallet(privateKey).connect(provider);
        const contractWithSigner = contract.connect(wallet);

        // 현재 caller를 출력
        // console.log(`Current caller: ${wallet.address}`);

        // 이미 참여하고 있으면 참여 못하게는 어떻게?

        const estimatedGas = await contractWithSigner.estimateGas.safeTransferFrom(admin, address, seriesId, 1, '0x');

        const tx = await contractWithSigner.safeTransferFrom(admin, address, seriesId, 1, '0x', {
            gasLimit: estimatedGas,
        });
        const receipt = await tx.wait();
        if (receipt.status === 1) {
            // smart contract 트랜잭션 성공 후,
            // 유저 정보 만들어주고
            const creatUser = await User.findOrCreate(
                {
                    account: address,
                },
                { transaction: seqTx }
            );

            // applyCount 업데이트
            const updateSeries = await Series.update(
                {
                    applyCount: sequelize.literal('apply_count + 1'),
                },
                { where: { id: seriesId } },
                { transaction: seqTx }
            );

            const seriesInstance = await Series.findByPk(seriesId, { transaction: seqTx }); // 해당 seriesId로 Series 인스턴스 가져오기
            await creatUser.addSeries(seriesInstance, { transaction: seqTx }); // User와 Series 관계 설정
        } else {
            throw new Error('Transaction failed');
        }

        /*
        유저정보 만들어주고
        신청하기하면 applyCount 업데이트
        user_nfts 통해서 둘이 관계 형성
        */

        // console.log(tx.hash);
        await seqTx.commit();
        res.status(200).json({
            log: 'participate success',
            txHash: tx.hash,
        });
    } catch (err) {
        await seqTx.rollback();
        console.error(err);
        res.status(400).json({
            log: 'participate-series error',
        });
    }
});

module.exports = router;
