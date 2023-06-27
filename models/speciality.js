"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Speciality extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Speciality {1} -- {1..n} Doctor
      Speciality.hasMany(models.Doctor, {
        as: "doctor",
        foreignKey: "spec_id", //foreignKey of Doctor
      });
    }
  }
  Speciality.init(
    {
      speciality: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Speciality",
      tableName: "specialities",
    }
  );
  return Speciality;
};
