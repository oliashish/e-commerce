"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class vendor extends Model {
        static associate({ product }) {
            this.belongsTo((product, { foreignKey: product_id }));
        }
    }
    vendor.init(
        {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            vendor_id: {
                type: DataTypes.INTEGER,
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
