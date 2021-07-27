"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.changeColumn("product", "image", {
            type: Sequelize.STRING,
            allowNull: false,
        });
    },
};
