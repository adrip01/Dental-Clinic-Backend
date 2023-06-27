"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("customers", [
      {
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 10,
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
