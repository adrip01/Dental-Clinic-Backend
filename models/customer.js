"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Customer {1} -- {1} User
      Customer.belongsTo(models.User, {
        as: "user",
        foreignKey: "user_id", //foreignKey of Customer
      });

      //Customer {1}--{n} Appointment
      Customer.hasMany(models.Appointment, {
        as: "appointment",
        foreignKey: "customer_id" //foreignKey of appountments
      })
    }
  }
  Customer.init(
    {
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Customer",
      tableName: "customers",
    }
  );
  return Customer;
};
