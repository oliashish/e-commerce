const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate({
            Discount,
            ProductInventory,
            ProductCategory,
            Cart,
            OrderItem,
        }) {
            this.belongsTo(ProductCategory, {
                foreignKey: "cat_id",
            });
            this.belongsTo(ProductInventory, {
                foreignKey: "inventry_id",
            });
            this.belongsTo(Discount, {
                foreignKey: "disc_id",
            });
            this.hasOne(Cart);
            this.hasOne(OrderItem);
        }
    }
    Product.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
                unique: true,
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            image: {
                type: DataTypes.BLOB,
                allowNull: false,
            },
            desc: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.FLOAT,
                allowNull: false,
                unique: true,
            },
        },
        {
            sequelize,
            tableName: "product",
            modelName: "Product",
        }
    );
    return Product;
};
