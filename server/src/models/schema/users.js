const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
        static associate(models) {}
    }
    Users.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            contact_number: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
        },
        {
            sequelize,
            tableName: "users",
            modelName: "Users",
        }
    );
    return Users;
};