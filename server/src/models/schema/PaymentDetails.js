const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
        static associate({ OrderDetail }) {
            this.hasOne(OrderDetail, {
                foreignKey: "order_id",
            });
        }
    }
    Users.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },

            amount: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            Status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "users",
            modelName: "Users",
        }
    );
    return Users;
};
