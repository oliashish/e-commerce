"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class product_image extends Model {
        static associate({ product }) {
            this.belongsTo(product, { foreignKey: product_id });
        }
    }
    product_image.init(
        {
            image_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            product_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            image: {
                type: DataTypes.BLOB("long"),
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "product_image",
        }
    );
    return product_image;
};
