module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("order_details", {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            payment_id: {
                type: Sequelize.UUID,

                allowNull: false,
            },
            user_id: {
                type: Sequelize.UUID,

                allowNull: false,
            },

            total: {
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
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("order_details");
    },
};
