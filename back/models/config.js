require('dotenv').config();

module.exports = {
    development: {
        username: process.env.SEQUELIZE_USERNAME,
        password: process.env.SEQUELIZE_PASSWORD,
        database: '2023-GBIC-DEV',
        host: process.env.SEQUELIZE_HOST,
        dialect: 'mysql',
        logging: false,
    },
    /*
  test: {
    username: 'root',
    password: null,
    database: 'DeliTo_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'DeliTo_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  */
};
