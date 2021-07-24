"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.addColumn("user_address", "username", {
            type: Sequelize.STRING,
            allowNull: false,
        });
    },
};
