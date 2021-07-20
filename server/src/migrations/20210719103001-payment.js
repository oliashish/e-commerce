"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            "payment",
            {
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
                card_num: {
                    type: Sequelize.BIGINT,
                    allowNull: false,
                    unique: true,
                },
                expiry: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
            },
            {
                timestamp: true,
            }
        );
    },
    down: (queryInterface) => {
        return queryInterface.dropTable("payment");
    },
};
