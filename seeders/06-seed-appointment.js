"use strict";

const { TIME } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("appointments", [
      {
        customer_id: 6,
        doctor_id: 1,
        date: "2023-10-08",
        time: "14:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customer_id: 3,
        doctor_id: 2,
        date: "2023-05-26",
        time: "12:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
