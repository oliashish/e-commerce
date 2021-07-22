module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.changeColumn("user", "contact_number", {
            type: Sequelize.STRING,
            allowNull: true,
            unique: false,
        });
    },
};
