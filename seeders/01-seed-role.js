"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("roles", [
      {
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: "doctor",
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
