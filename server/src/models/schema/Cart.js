const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {
        static associate({ User, Product }) {
            this.belongsTo(User, {
                foreignKey: "user_id",
            });
            this.belongsTo(Product, {
                foreignKey: "product_id",
            });
        }
    }
    Cart.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
                unique: true,
            },
            qty: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "cart",
            modelName: "Cart",
        }
    );
    return Cart;
};
