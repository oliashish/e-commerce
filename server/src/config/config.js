require("dotenv").config({ path: __dirname + "/../../.env" });

module.exports = config = {
    development: {
        username: "root",
        password: "mysql001",
        database: "aura_apex",
        host: "localhost",
        dialect: "mysql",
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE,
        host: process.env.DB_HOST,
        dialect: "mysql",
    },
};
