module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("payment", {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            user_id: {
                type: Sequelize.UUID,

                allowNull: false,
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
        await queryInterface.dropTable("payment");
    },
};
