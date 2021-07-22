const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate({ UserAddress, Payment, OrderDetail }) {
            this.hasMany(Payment);
            this.hasMany(UserAddress);
            this.hasMany(OrderDetail);
        }
        toJSON() {
            return {
                ...this.get(),
                password: undefined,
            };
        }
    }
    User.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
                unique: true,
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
            },
        },
        {
            sequelize,
            tableName: "user",
            modelName: "User",
        }
    );
    return User;
};
