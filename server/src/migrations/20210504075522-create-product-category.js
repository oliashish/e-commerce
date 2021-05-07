"use strict";
module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable("product_categories", {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            product_id: {
                type: DataTypes.INTEGER,
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
        await queryInterface.dropTable("product_categories");
    },
};
