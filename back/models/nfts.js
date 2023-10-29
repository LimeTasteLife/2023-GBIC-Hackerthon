const Sequelize = require('sequelize');
const User_Nfts = require('./user_nfts');
const Series_Nfts = require('./series_nfts');

module.exports = class Nfts extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    allowNull: false,
                    primaryKey: true,
                },
                tokenId: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                name: {
                    type: Sequelize.STRING(200), // 20byte 제한.
                    allowNull: false,
                },
                image: {
                    type: Sequelize.STRING(1000),
                    allowNull: false,
                },
                description: {
                    type: Sequelize.STRING(1000),
                    allowNull: false,
                },
                latitude: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                longtitude: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
            },
            {
                sequelize,
                timestamps: true,
                underscored: true,
                modelName: 'Nfts',
                tableName: 'nfts',
                paranoid: true,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }

    static associate(db) {
        db.Nfts.belongsToMany(db.User, { through: User_Nfts });
        db.Nfts.belongsToMany(db.Series, { through: Series_Nfts });
    }
};
