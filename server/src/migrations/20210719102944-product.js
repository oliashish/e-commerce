"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("product", {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
                unique: true,
            },
            seller_id: {
                type: Sequelize.UUID,
                allowNull: false,
                reference: {
                    model: "seller",
                    key: "id",
                },
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            image: {
                type: Sequelize.BLOB,
                allowNull: false,
            },
            desc: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            brand: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            price: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            sku: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable("product");
    },
};
