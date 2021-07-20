"use strict";
const faker = require("faker");

module.exports = {
    up: (queryInterface, Sequelize) => {
        const userData = [];
        for (let i = 0; i < 5; i++) {
            let userObj = {
                id: faker.datatype.uuid(),
                username: faker.name.findName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                contact_number: faker.phone.phoneNumber(),
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            userData.push(userObj);
        }
        return queryInterface.bulkInsert("user", userData);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("user", null, {});
    },
};
