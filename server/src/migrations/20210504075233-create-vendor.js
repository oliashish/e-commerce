"use strict";
module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable("vendors", {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            product_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            vendor_id: {
                type: DataTypes.INTEGER,
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
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        });
    },
    down: async (queryInterface, DataTypes) => {
        await queryInterface.dropTable("vendors");
    },
};
