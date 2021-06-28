const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Inventory extends Model {
        static associate({ Product }) {
            this.hasOne(Product);
        }
    }
    Inventory.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
                unique: true,
            },
            quant: {
                type: DataTypes.UUID,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "inventory",
            modelName: "Inventory",
        }
    );
    return Inventory;
};
