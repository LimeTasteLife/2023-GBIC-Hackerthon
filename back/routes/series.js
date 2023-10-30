const express = require('express');
const { Series, Nfts } = require('../models');
const { ethers, Wallet } = require('ethers');

const router = express.Router();

router.get('/', async (req, res, next) => {
    const { id } = req.query;
    try {
        const seriesInfo = await Series.findOne({
            where: { id: id },
        });
        const nftInfo = await Nfts.findAll({
            where: { seriesId: id },
            order: [['id', 'ASC']],
        });

        if (!seriesInfo || !nftInfo) {
            res.status(404).json({
                log: 'db failed',
            });
        } else {
            const result = {
                data: [
                    {
                        name: seriesInfo.boardName,
                        image: seriesInfo.boardImage,
                        description: seriesInfo.boardDescription,
                        attributes: [
                            {
                                trait_type: 'Series',
                                value: seriesInfo.id,
                            },
                        ],
                    },
                    ...nftInfo.map((nft) => {
                        return {
                            name: nft.name,
                            image: nft.image,
                            description: nft.description,
                            attributes: [
                                {
                                    trait_type: 'Latitude',
                                    value: nft.latitude,
                                },
                                {
                                    trait_type: 'Longtitude',
                                    value: nft.longtitude,
                                },
                                {
                                    trait_type: 'Address',
                                    value: nft.address,
                                },
                                {
                                    trait_type: 'Series',
                                    value: nft.boardTraitSeries,
                                },
                            ],
                        };
                    }),
                ],
                baseURI: seriesInfo.baseURI,
                seriesInfo: {
                    series: seriesInfo.id,
                    title: seriesInfo.title,
                    benefit: seriesInfo.benefit,
                    owner: seriesInfo.owner,
                    useWhere: seriesInfo.useWhere,
                    useWhenFrom: seriesInfo.useWhenFrom,
                    useWhenTo: seriesInfo.useWhenTo,
                    description: seriesInfo.description,
                    quantity: seriesInfo.quantity,
                    applyCount: seriesInfo.applyCount,
                },
            };
            res.status(200).json(result);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

router.get('/last', async (req, res, next) => {
    try {
        const lastSeriesId = await Series.max('id');

        res.status(200).json({
            Id: lastSeriesId,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

router.get('/all', async (req, res, next) => {
    try {
        const result = [];
        const findSeriesAll = await Series.findAll({
            order: [['id', 'DESC']],
        });

        //console.log(findSeriesAll);

        let idx = 0;
        const promises = findSeriesAll.map(async (series) => {
            const findNftsAll = await Nfts.findAll({
                where: { seriesId: series.id },
            });

            const pushData = {
                data: [
                    {
                        name: findSeriesAll[idx].boardName,
                        image: findSeriesAll[idx].boardImage,
                        description: findSeriesAll[idx].boardDescription,
                        attributes: [
                            {
                                trait_type: 'Series',
                                value: findSeriesAll[idx].id,
                            },
                        ],
                    },
                    ...findNftsAll.map((nft) => {
                        return {
                            name: nft.name,
                            image: nft.image,
                            description: nft.description,
                            attributes: [
                                {
                                    trait_type: 'Latitude',
                                    value: nft.latitude,
                                },
                                {
                                    trait_type: 'Longtitude',
                                    value: nft.longtitude,
                                },
                                {
                                    trait_type: 'Address',
                                    value: nft.address,
                                },
                                {
                                    trait_type: 'Series',
                                    value: nft.boardTraitSeries,
                                },
                            ],
                        };
                    }),
                ],
                baseURI: findSeriesAll[idx].baseURI,
                seriesInfo: {
                    series: findSeriesAll[idx].id,
                    title: findSeriesAll[idx].title,
                    benefit: findSeriesAll[idx].benefit,
                    owner: findSeriesAll[idx].owner,
                    useWhere: findSeriesAll[idx].useWhere,
                    useWhenFrom: findSeriesAll[idx].useWhenFrom,
                    useWhenTo: findSeriesAll[idx].useWhenTo,
                    description: findSeriesAll[idx].description,
                    quantity: findSeriesAll[idx].quantity,
                    applyCount: findSeriesAll[idx].applyCount,
                },
            };

            result.push(pushData);
        });
        await Promise.all(promises);
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
