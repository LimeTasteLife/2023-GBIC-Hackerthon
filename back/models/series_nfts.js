const Sequelize = require('sequelize');

module.exports = class Series_nfts extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {},
            {
                sequelize,
                timestamps: false,
                underscored: true,
                modelName: 'Series_nfts',
                tableName: 'series_nfts',
                paranoid: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }

    static associate(db) {
        Series_nfts.belongsTo(db.Series);
        Series_nfts.belongsTo(db.Nfts);
    }
};
