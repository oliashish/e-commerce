"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            "review",
            {
                id: {
                    type: Sequelize.UUID,
                    defaultValue: Sequelize.UUIDV4,
                    allowNull: false,
                    primaryKey: true,
                    unique: true,
                },
                product_id: {
                    type: Sequelize.UUID,
                    allowNull: false,
                    references: {
                        model: "product",
                        key: "id",
                    },
                },
                name: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                comment: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                rating: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                reviews_num: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    defaultValue: 0,
                },
            },
            {
                timestamp: true,
            }
        );
    },
    down: (queryInterface) => {
        return queryInterface.dropTable("review");
    },
};
