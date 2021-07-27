"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn("order_detail", "amount", {
                type: Sequelize.INTEGER,
                allowNull: false,
            }),
            queryInterface.addColumn("order_detail", "payment_id", {
                type: Sequelize.BIGINT,
                allowNull: false,
            }),
            queryInterface.addColumn("order_detail", "signature", {
                type: Sequelize.BIGINT,
                allowNull: false,
            }),
            queryInterface.addColumn("order_detail", "order_id", {
                type: Sequelize.BIGINT,
                allowNull: false,
            }),
            queryInterface.removeColumn("order_detail", "total"),
            queryInterface.removeColumn("order_detail", "isPaymentDone"),
        ]);
    },
};
