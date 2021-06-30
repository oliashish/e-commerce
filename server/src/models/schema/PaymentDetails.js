const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class PaymentDetails extends Model {
        static associate({ OrderDetail }) {
            this.belongsTo(OrderDetail);
        }
    }
    Users.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
                unique: true,
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
            tableName: "payment_details",
            modelName: "PaymentDetails",
        }
    );
    return PaymentDetails;
};
