"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class product_category extends Model {
        static associate({ product }) {
            this.belongsTo(product);
        }
    }
    product_category.init(
        {
            category_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
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
