const Sequelize = require('sequelize');
const User = require('./user');
const Series = require('./series');
const Nfts = require('./nfts');
const user_series = require('./user_series');
const user_nfts = require('./user_nfts');
const series_nfts = require('./series_nfts');

const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];
const db = {};
/*
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
});*/

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.User = User;
db.Series = Series;
db.Nfts = Nfts;
db.user_series = user_series;
db.user_nfts = user_nfts;
db.series_nfts = series_nfts;

User.init(sequelize);
Series.init(sequelize);
Nfts.init(sequelize);
user_series.init(sequelize);
user_nfts.init(sequelize);
series_nfts.init(sequelize);

User.associate(db);
Series.associate(db);
Nfts.associate(db);
user_series.associate(db);
user_nfts.associate(db);
series_nfts.associate(db);

module.exports = db;
