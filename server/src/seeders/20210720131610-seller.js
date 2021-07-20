"use strict";
const faker = require("faker");

module.exports = {
    up: (queryInterface, Sequelize) => {
        const sellerData = [];
        for (let i = 0; i < 20; i++) {
            let sellerObj = {
                id: faker.datatype.uuid(),
                name: faker.name.findName(),
                address:
                    faker.address.streetAddress() +
                    ", " +
                    faker.address.state(),
                desc: faker.lorem.sentence(),
                rating: Math.random() + 3,
                reviews_num: faker.datatype.number(),
            };
            sellerData.push(sellerObj);
        }
        return queryInterface.bulkInsert("seller", sellerData);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("seller", null, {});
    },
};
