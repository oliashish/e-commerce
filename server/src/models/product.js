"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class product extends Model {
        static associate(models) {
            this.hasMany(models.product_category);
            this.hasMany(models.product_image);
            this.hasMany(models.vendor);
        }
    }
    product.init(
        {
            product_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
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
