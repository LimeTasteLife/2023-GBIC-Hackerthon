const Sequelize = require('sequelize');

module.exports = class User_nfts extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {},
            {
                sequelize,
                timestamps: false,
                underscored: true,
                modelName: 'User_nfts',
                tableName: 'user_nfts',
                paranoid: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }

    static associate(db) {
        User_nfts.belongsTo(db.Nfts);
        User_nfts.belongsTo(db.User);
    }
};
