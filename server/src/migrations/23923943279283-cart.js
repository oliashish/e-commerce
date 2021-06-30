module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("cart", {
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
            },
            prod_id: {
                type: Sequelize.UUID,
                allowNull: false,
            },

            quant: {
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
        await queryInterface.dropTable("cart");
    },
};
