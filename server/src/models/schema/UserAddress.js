const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class UserAddress extends Model {
        static associate({ User }) {
            this.belongsTo(User, {
                foreignKey: "user_id",
            });
        }
    }
    UserAddress.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
                unique: true,
            },
            address_line: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            city: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            pin_cod: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            country: {
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            tableName: "user_address",
            modelName: "UserAddress",
        }
    );
    return UserAddress;
};
