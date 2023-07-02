const userController = {};

userController.getAll = require("./getAll");
userController.userProfile = require("./userProfile");
userController.updateProfile = require("./updateProfile");
userController.createAppointment = require("./createAppointment");
userController.updateAppointment = require("./updateAppointment");
userController.deleteAppointment = require("./deleteAppointment");

module.exports = userController;
