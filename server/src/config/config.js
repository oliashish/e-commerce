require("dotenv").config({ path: __dirname + "/../../.env" });

console.log(process.env.DB_USERNAME);

module.exports = config = {
    development: {
        username: "root",
        password: "mysql001",
        database: "sql6425008",
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
