"use strict";
const { v4: uuid } = require("uuid");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "discount",
            [
                {
                    id: uuid(),
                    name: "clearance sale",
                    desc: "clearance sale is on for the year",
                    percent: "50%",
                    active: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuid(),

                    name: "summer sale",
                    desc: "summer sale is on for the year",
                    percent: "50%",
                    active: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuid(),

                    name: "winter sale",
                    desc: "winter sale",
                    percent: "10%",
                    active: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuid(),

                    name: "rakhi sale",
                    desc: "rakhi sale is on for the year",
                    percent: "30%",
                    active: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuid(),

                    name: "diwali sale",
                    desc: "diwali sale is on for the year",
                    percent: "35%",
                    active: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuid(),

                    name: "kids sale",
                    desc: "kids sale is on for the year",
                    percent: "25%",
                    active: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuid(),
                    name: "big day sale",
                    desc: "big day sale is on for the year",
                    percent: "50%",
                    active: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuid(),

                    name: "amazon sale",
                    desc: "amazon sale is on for the year",
                    percent: "50%",
                    active: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuid(),

                    name: "electronic week",
                    desc: "electronic week sale is on for the year",
                    percent: "20%",
                    active: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("discount");
    },
};
