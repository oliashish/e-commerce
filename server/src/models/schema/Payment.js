const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Payment extends Model {
        static associate({ Users }) {
            this.belongsTo(Users, {
                foreignKey: "user_id",
            });
        }
    }
    Payment.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
                unique: true,
            },

            card_num: {
                type: DataTypes.BIGINT,
                allowNull: false,
                unique: true,
            },
            expiry: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "payment",
            modelName: "Payment",
        }
    );
    return Payment;
};
