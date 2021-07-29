"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.changeColumn("product", "image", {
            type: Sequelize.STRING,
            allowNull: false,
        });
    },
    down: async (queryInterface, Sequelize) => {
        return queryInterface.changeColumn("product", "image", {
            type: Sequelize.BLOB,
            allowNull: false,
        });
    },
};
