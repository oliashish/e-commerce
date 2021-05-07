const db = require("../models");

const database = () => {
    db.sequelize
        .authenticate()
        .then(console.log("database connected!!!"))
        .catch((err) => {
            console.log(err);
        });
};
database();

module.exports = database;
