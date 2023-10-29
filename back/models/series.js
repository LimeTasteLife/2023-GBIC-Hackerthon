const Sequelize = require('sequelize');
const User_series = require('./user_series');
const Nfts = require('./nfts');

module.exports = class Series extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    unique: true,
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
                quantity: {
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
                baseURI: {
                    type: Sequelize.STRING(500),
                    allowNull: false,
                },
                boardName: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                boardImage: {
                    type: Sequelize.STRING(1000),
                    allowNull: false,
                },
                boardDescription: {
                    type: Sequelize.STRING(1000),
                    allowNull: false,
                },
                boardTraitSeries: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
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
        db.Series.hasMany(db.Nfts, { foreignKey: 'seriesId', sourceKey: 'id' });
    }
};
