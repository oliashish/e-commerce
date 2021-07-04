module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("product", {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
                unique: true,
            },
            cat_id: {
                type: Sequelize.UUID,
                allowNull: false,
            },
            disc_id: {
                type: Sequelize.UUID,
            },

            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            image: {
                type: Sequelize.BLOB,
                allowNull: false,
            },
            desc: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            price: {
                type: Sequelize.FLOAT,
                allowNull: false,
                unique: true,
            },
            total_available: {
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
        await queryInterface.dropTable("product");
    },
};
