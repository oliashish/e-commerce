const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Seller extends Model {
        static associate({ Product }) {
            this.hasMany(Product, {
                foreignKey: "seller_id",
            });
        }
    }
    Seller.init(
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
            address: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            desc: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            rating: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            reviews_num: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
        },
        {
            sequelize,
            tableName: "seller",
            modelName: "Seller",
        }
    );
    return Seller;
};
