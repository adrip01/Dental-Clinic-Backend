"use strict";

const bcrypt = require("bcrypt");

const password = "12345678";
const phone_number = "555667788";
const encryptedPassword = bcrypt.hashSync(password, 10);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        role_id: 1, // admin
        user_first_name: "Admin",
        user_last_name: "Json",
        birthday: "1996-05-01",
        email: "admin@admin.com",
        password: encryptedPassword,
        phone_number: phone_number,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 2,
        user_first_name: "Jose",
        user_last_name: "Palacios",
        birthday: "1996-05-01",
        email: "jose@palacios.com",
        password: encryptedPassword,
        phone_number: phone_number,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 2,
        user_first_name: "Marta",
        user_last_name: "García",
        birthday: "2002-09-10",
        email: "marta@garcia.com",
        password: encryptedPassword,
        phone_number: phone_number,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 2,
        user_first_name: "Ernesto",
        user_last_name: "Pérez",
        birthday: "1966-07-23",
        email: "ernest@perez.com",
        password: encryptedPassword,
        phone_number: phone_number,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 2,
        user_first_name: "Vicente",
        user_last_name: "Ruiz",
        birthday: "1987-12-31",
        email: "vicente@ruiz.com",
        password: encryptedPassword,
        phone_number: phone_number,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 2,
        user_first_name: "Enrrique",
        user_last_name: "Cervantes",
        birthday: "1974-01-15",
        email: "laura@laura.com",
        password: encryptedPassword,
        phone_number: phone_number,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 2,
        user_first_name: "Terry",
        user_last_name: "Medhurst",
        birthday: "2000-12-25",
        email: "terry@medhusrst.com",
        password: encryptedPassword,
        phone_number: phone_number,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 2,
        user_first_name: "Sheldon",
        user_last_name: "Quigley",
        birthday: "2003-08-02",
        email: "sheldon@quigley.com",
        password: encryptedPassword,
        phone_number: phone_number,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 2,
        user_first_name: "Terrill",
        user_last_name: "Hills",
        birthday: "1992-12-30",
        email: "terrill@hills.com",
        password: encryptedPassword,
        phone_number: phone_number,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 2,
        user_first_name: "Miles",
        user_last_name: "Cummerata",
        birthday: "1969-01-16",
        email: "miles@cummerata.com",
        password: encryptedPassword,
        phone_number: phone_number,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 3,
        user_first_name: "Manuel",
        user_last_name: "Coronado",
        birthday: "1978-06-25",
        email: "manuel@coronado.com",
        password: encryptedPassword,
        phone_number: phone_number,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 3,
        user_first_name: "Melisa",
        user_last_name: "Grande",
        birthday: "1982-09-18",
        email: "melisa@grande.com",
        password: encryptedPassword,
        phone_number: phone_number,
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
