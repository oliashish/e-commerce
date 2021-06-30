module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("user_address", {
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
            address_line: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            city: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            pin_cod: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            country: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable("user_address");
    },
};
