const Sequelize = require('sequelize');
const User_post = require('./user_nfts');
const User_series = require('./user_series');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    allowNull: false,
                    primaryKey: true,
                },
                account: {
                    type: Sequelize.STRING(200),
                    allowNull: false,
                    unique: true,
                },
                name: {
                    type: Sequelize.STRING(20), // 20byte 제한.
                    allowNull: true,
                },
                email: {
                    type: Sequelize.STRING(100),
                    allowNull: true,
                    unique: true,
                },
                image: {
                    type: Sequelize.STRING(1000),
                    allowNull: true,
                },
            },
            {
                sequelize,
                timestamps: true,
                underscored: true,
                modelName: 'User',
                tableName: 'user',
                paranoid: true,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }

    static associate(db) {
        db.User.belongsToMany(db.Nfts, { through: User_post });
        db.User.belongsToMany(db.Series, { through: User_series });
    }
};
