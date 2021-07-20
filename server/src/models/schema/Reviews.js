const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Review extends Model {
        static associate({ Product }) {
            this.belongsTo(Product, {
                foreignKey: "product_id",
            });
        }
    }
    Review.init(
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
            comment: {
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
            tableName: "review",
            modelName: "Review",
        }
    );
    return Review;
};
