const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class OrderDetail extends Model {
        static associate({ User, Product }) {
            this.belongsTo(User, {
                foreignKey: "user_id",
            });
            this.belongsTo(Product, {
                foreignKey: "product_id",
            });
        }
    }
    OrderDetail.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
                unique: true,
            },
            amount: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            payment_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            signature: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            order_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "order_detail",
            modelName: "OrderDetail",
        }
    );
    return OrderDetail;
};
