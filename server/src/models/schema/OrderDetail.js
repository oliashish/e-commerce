const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class OrderDetails extends Model {
        static associate({ Users, PaymentDetails, OrderItems }) {
            this.belongsTo(Users, {
                foreignKey: "user_id",
            });
            this.belongsTo(PaymentDetails, {
                foreignKey: "payment_id",
            });
            this.hasMany(OrderItems);
        }
    }
    OrderDetails.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
                unique: true,
            },

            total: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "order_details",
            modelName: "OrderDetails",
        }
    );
    return OrderDetails;
};
