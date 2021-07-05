const db = require("../models");

const database = () => {
    db.sequelize
        .sync()
        .then(console.log("database connected!!!"))
        .catch((err) => {
            console.log(err);
        });
};
database();

module.exports = database;
