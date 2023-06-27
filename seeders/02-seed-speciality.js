"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("specialities", [
      {
        speciality: "endodontist",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        speciality: "orthodontist",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        speciality: "periodontist",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        speciality: "maxillofacial surgeon",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        speciality: "anesthesiologists",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        speciality: "pedodontist",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        speciality: "oral medicine",
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
