"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class product extends Model {
        static associate({ product_category, product_image, vendor }) {
            this.hasMany(product_category, { foreignKey: category_id });
            this.hasMany(product_image, { foreignKey: image_id });
            this.hasMany(vendor, { foreignKey: vendor_id });
        }
    }
    product.init(
        {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            product_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            product_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            product_description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            product_image: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            price: {
                type: DataTypes.INTEGER,
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
            modelName: "product",
        }
    );
    return product;
};
