const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Discount extends Model {
        static associate({ Product }) {
            this.hasMany(Product);
        }
    }
    Discount.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
                unique: true,
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            desc: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            percent: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            active: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "discount",
            modelName: "Discount",
        }
    );
    return Discount;
};
