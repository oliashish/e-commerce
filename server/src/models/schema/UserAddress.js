const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class UserAddress extends Model {
        static associate({ Users }) {
            this.belongsTo(Users, {
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
                type: DataTypes.INTERGER,
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
