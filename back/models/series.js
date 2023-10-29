const Sequelize = require('sequelize');
const Series_nfts = require('./series_nfts');
const User_series = require('./user_series');

module.exports = class Series extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    allowNull: false,
                    primaryKey: true,
                },
                title: {
                    type: Sequelize.STRING(200),
                    allowNull: false,
                },
                benefit: {
                    type: Sequelize.STRING(200),
                    allowNull: false,
                },
                description: {
                    type: Sequelize.STRING(1000),
                    allowNull: false,
                },
                quantitiy: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                owner: {
                    type: Sequelize.STRING(200),
                    allowNull: false,
                },
                useWhere: {
                    type: Sequelize.STRING(200),
                    allowNull: false,
                },
                useWhenFrom: {
                    type: Sequelize.DATE,
                    allowNull: true,
                },
                useWhenTo: {
                    type: Sequelize.DATE,
                    allowNull: true,
                },
                applyCount: {
                    type: Sequelize.INTEGER,
                    allowNull: true,
                    defaultValue: 0,
                },
                transactionHash: {
                    type: Sequelize.STRING(200),
                    allowNull: false,
                },
            },
            {
                sequelize,
                timestamps: true,
                underscored: true,
                modelName: 'Series',
                tableName: 'series',
                paranoid: true,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }

    static associate(db) {
        db.Series.belongsToMany(db.User, { through: User_series });
        db.Series.belongsToMany(db.Nfts, { through: Series_nfts });
    }
};
