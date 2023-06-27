"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Appointment {1}--{1} Customer
      Appointment.hasOne(models.Customer, {
        as: "customer",
        foreignKey: "id", //foreignKey of appountments
      });
    }
  }
  Appointment.init(
    {
      customer_id: DataTypes.INTEGER,
      doctor_id: DataTypes.INTEGER,
      date: DataTypes.DATE,
      time: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: "Appointment",
      tableName: "appointments",
    }
  );
  return Appointment;
};
