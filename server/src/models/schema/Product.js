const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate({ Discount, ProductCategory, Cart, OrderItem }) {
            this.belongsTo(Discount, {
                foreignKey: "disc_id",
            });
            this.belongsTo(ProductCategory, {
                foreignKey: "cat_id",
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
            brand: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            total_available: {
                type: DataTypes.INTEGER,
                allowNull: false,
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
