"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("cart", {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
                unique: true,
            },
            user_id: {
                type: Sequelize.UUID,
                allowNull: false,
                reference: {
                    model: "user",
                    key: "id",
                },
            },
            product_id: {
                type: Sequelize.UUID,
                allowNull: false,
                reference: {
                    model: "product",
                    key: "id",
                },
            },
            qty: {
                type: Sequelize.INTEGER,
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
        return queryInterface.dropTable("cart");
    },
};
