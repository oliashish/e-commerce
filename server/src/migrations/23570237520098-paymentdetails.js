module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("payment_details", {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
                unique: true,
            },

            amount: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            Status: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable("payment_details");
    },
};
