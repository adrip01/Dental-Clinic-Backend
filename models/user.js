"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //User {1} -- {1} Customer
      User.hasOne(models.Customer, {
        as: "customer",
        foreignKey: "user_id", //foreignKey of Customer
      });

      //User {1} -- {1} Doctor
      User.hasOne(models.Doctor, {
        as: "doctor",
        foreignKey: "user_id", //foreignKey of Doctor
      });

      //User {1..n} -- {1} Role
      User.belongsTo(models.Role, {
        as: "role",
        foreignKey: "role_id", // foreignKey of User
      });
    }
  }
  User.init(
    {
      role_id: DataTypes.INTEGER,
      user_first_name: {
        type: DataTypes.STRING,
        validate: {
          is: {
            msg: "Name not valid",
            args: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
          },
        },
      },
      user_last_name: {
        type: DataTypes.STRING,
        validate: {
          is: {
            msg: "Name not valid",
            args: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
          },
        },
      },
      birthday: {
        type: DataTypes.DATE,
        validate: {
          isDate: true,
          isAfter: "{1}900-0{1}-0{1}",
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: {
            msg: "Email not valid",
          },
        },
      },
      password: DataTypes.STRING,
      phone_number: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );
  return User;
};
