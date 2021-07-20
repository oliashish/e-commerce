"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("order_detail", {
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
                references: {
                    model: "user",
                    key: "id",
                },
            },
            product_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: "product",
                    key: "id",
                },
            },
            total: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            isPaymentDone: {
                type: Sequelize.BOOLEAN,
                default: false,
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
        return queryInterface.dropTable("order_detail");
    },
};
