const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class ProductCategory extends Model {
        static associate({ Product }) {
            this.hasMany(Product);
        }
    }
    ProductCategory.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
                unique: true,
            },
            name: {
                type: DataTypes.Strings,
                allowNull: false,
            },
            type: {
                type: DataTypes.Strings,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "product_category",
            modelName: "ProductCategory",
        }
    );
    return ProductCategory;
};
