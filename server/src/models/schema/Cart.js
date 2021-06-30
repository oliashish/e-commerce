const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {
        static associate({ Users, Product }) {
            this.belongsTo(Users, {
                foreignKey: "user_id",
            });
            this.belongsTo(Product, {
                foreignKey: "prod_id",
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

            quant: {
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
