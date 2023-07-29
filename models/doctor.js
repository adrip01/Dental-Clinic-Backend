"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Doctor {1} -- {1} User
      Doctor.belongsTo(models.User, {
        as: "user",
        foreignKey: "user_id", //foreignKey of Doctor
      });

      //Doctor {1..n}--{1} Sepeciality
      Doctor.belongsTo(models.Speciality, {
        as: "speciality",
        foreignKey: "spec_id", //foreignKey of Doctor
      });

      //Doctor {1}--{n} Appointment
      Doctor.hasMany(models.Appointment, {
        as: "appointment",
        foreignKey: "doctor_id", //foreignKey of appountments
      });
    }
  }
  Doctor.init(
    {
      user_id: DataTypes.INTEGER,
      spec_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Doctor",
      tableName: "doctors",
    }
  );
  return Doctor;
};
