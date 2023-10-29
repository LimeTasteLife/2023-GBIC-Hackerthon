const express = require('express');
const { ethers, Wallet } = require('ethers');
const { Series, Nfts } = require('../models');

const router = express.Router();

const ERC1155 = require('../artifacts/contracts/dnftERC1155.sol/MyERC1155.json');
const URL = process.env.JSON_RPC_PROVIDER;
const privateKey = process.env.PRIVATE_KEY;
const account = process.env.PUBLIC_KEY;

router.post('/', async (req, res, next) => {
    const { seriesInfo, baseURI, minterAddress } = req.body;
    const { data } = req.body;
    try {
        // provider와 contract를 연결하고 서명한다.
        const provider = new ethers.providers.JsonRpcProvider(URL);
        const contractAddress = process.env.CONTRACT_ADDRESS;
        const contract = new ethers.Contract(contractAddress, ERC1155.abi, provider);
        const wallet = new Wallet(privateKey).connect(provider);
        const contractWithSigner = contract.connect(wallet);

        const amount = seriesInfo.quantity;
        const URIs = [];
        // 동적으로 숫자 추가.
        const seriesNFTCount = 5;
        const ipfsBaseURI = baseURI.replace('https://c6b8e7180c3c42db758973559ad7f50d.ipfscdn.io/ipfs/', '');
        for (let i = 0; i < seriesNFTCount; i++) {
            URIs.push(`${ipfsBaseURI}/${i}`);
        }
        //console.log(URIs);

        // 트랜잭션을 보내기 전에 가스를 추정한다.
        //const estimatedGas = await contractWithSigner.estimateGas.mintSeries(account, amount, URIs, '0x');

        // 만약에 이미 있는 시리즈를 중복 민팅한다면 (?) 어떻게 탐지할 것인가.
        const tx = await contractWithSigner.mintSeries(account, amount, URIs, '0x', {
            // 임의의 안정된 가스양
            gasLimit: 5000000,
        });
        const receipt = await tx.wait();
        let seriesId = await contractWithSigner.getNextSeriesId();
        seriesId = seriesId - 10;
        let nSeriesId = seriesId;
        // console.log(receipt);
        // 트랜잭션 receipt를 확인해서 성공여부를 체크한다.
        if (receipt.status === 1) {
            // 트랜잭션 성공, 시리즈를 DB에 저장한다.
            const createSeries = await Series.create({
                id: seriesId,
                title: seriesInfo.title,
                benefit: seriesInfo.benefit,
                description: seriesInfo.description,
                quantity: seriesInfo.quantity,
                owner: minterAddress,
                useWhere: seriesInfo.useWhere,
                useWhenFrom: seriesInfo.useWhenFrom,
                useWhenTo: seriesInfo.useWhenTo,
                applyCount: 0,
                baseURI: baseURI,
                boardName: data[0].name,
                boardImage: data[0].image,
                boardDescription: data[0].description,
                boardTraitSeries: data[0].attributes[0].value,
                transactionHash: tx.hash,
            });

            if (createSeries) {
                // 성공했으면,
                const nfts = data.slice(1).map((nft) => {
                    return {
                        id: ++nSeriesId,
                        name: nft.name,
                        image: nft.image,
                        description: nft.description,
                        latitude: nft.attributes[0].value,
                        longtitude: nft.attributes[1].value,
                        address: nft.attributes[2].value,
                        boardTraitSeries: nft.attributes[3].value,
                        seriesId: seriesId,
                    };
                });
                //console.log(nfts);
                const creatNfts = await Nfts.bulkCreate(nfts);
                if (creatNfts) {
                    res.status(200).json({
                        log: 'mint-series success',
                        seriesId: seriesId,
                    });
                } else {
                    res.status(400).json({
                        log: 'db error',
                    });
                }
            } else {
                res.status(400).json({
                    log: 'db error',
                });
            }
        } else {
            throw new Error('Transaction failed');
        }
    } catch (err) {
        console.error(err);
        res.status(400).json({
            log: 'mint-series error',
        });
    }
});

module.exports = router;
