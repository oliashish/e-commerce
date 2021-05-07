"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class vendor extends Model {
        static associate({ product }) {
            this.belongsTo(product);
        }
    }
    vendor.init(
        {
            vendor_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            vendor_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            vendor_address: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "vendor",
            modelName: "vendor",
        }
    );
    return vendor;
};
