"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class product_category extends Model {
        static associate({ product }) {
            this.belongsTo(product, { foreignKey: "product_id" });
        }
    }
    product_category.init(
        {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            category_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            category_type: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            catergory_main: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            overall_cateogory: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "product_category",
            modelName: "product_category",
        }
    );
    return product_category;
};
