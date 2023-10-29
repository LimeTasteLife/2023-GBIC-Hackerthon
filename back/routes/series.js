const express = require('express');
const { Series, Nfts } = require('../models');

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
            console.log(seriesInfo, nftInfo);
            res.status(200).json({ result });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
