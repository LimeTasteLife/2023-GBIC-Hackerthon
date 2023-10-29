const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const cors = require('cors');
const { ethers, Wallet } = require('ethers');
const { sequelize } = require('./models');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);
const mintRouter = require('./routes/mint-series');
const participateSeriesRouter = require('./routes/participate-series');
const transferNFTRouter = require('./routes/transfer-nft');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// connect DB
sequelize
    .sync({ force: false })
    .then(() => {
        console.log('Success to connect DB');
    })
    .catch((err) => {
        console.error(err);
    });

// connect Web3
const ERC1155 = require('./artifacts/contracts/dnftERC1155.sol/MyERC1155.json');
const URL = process.env.JSON_RPC_PROVIDER;

// make a wallet instance
const privateKey = process.env.PRIVATE_KEY;

// wallet 연결은 이런식으로
/*
app.use(async (req, res, next) => {
    try {
        const provider = new ethers.providers.JsonRpcProvider(URL);
        const contractAddress = process.env.CONTRACT_ADDRESS;
        const contract = new ethers.Contract(contractAddress, ERC1155.abi, provider);
        const wallet = new Wallet(privateKey).connect(provider);
        const contractWithSigner = contract.connect(wallet);
        const tx = await contractWithSigner.balanceOf(wallet.address, 11);
        console.log(tx.toString());
    } catch (err) {
        console.error(err);
        res.status(400).json({
            log: 'mint-series error',
        });
    }
});
*/

app.use('/mint-series', mintRouter);
app.use('/participate-series', participateSeriesRouter);
app.use('/transfer-nft', transferNFTRouter);

app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} \n no response for routers`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500).json({
        status: err.status,
        log: err.message,
    });
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), ' waiting..');
});
