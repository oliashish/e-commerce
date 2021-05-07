"use strict";
module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable("products", {
            product_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            category_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            vendor_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            image_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            product_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            product_description: {
                type: DataTypes.STRING,
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
        await queryInterface.dropTable("products");
    },
};
