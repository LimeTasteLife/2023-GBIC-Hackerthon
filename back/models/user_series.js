const Sequelize = require('sequelize');

module.exports = class User_series extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {},
            {
                sequelize,
                timestamps: false,
                underscored: true,
                modelName: 'User_series',
                tableName: 'user_series',
                paranoid: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }

    static associate(db) {
        User_series.belongsTo(db.User);
        User_series.belongsTo(db.Series);
    }
};
