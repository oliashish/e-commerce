const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class OrderItem extends Model {
        static associate({ OrderDetails, Product }) {
            this.belongsTo(Product, {
                foreignKey: "prod_id",
            });
            this.belongsTo(OrderDetails, {
                foreignKey: "order_id",
            });
        }
    }
    OrderItem.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
                unique: true,
            },

            quant: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "order_items",
            modelName: "OrderItem",
        }
    );
    return OrderItem;
};
