const userController = {};

userController.getAll = require("./getAll");
userController.userProfile = require("./userProfile");
userController.updateProfile = require("./updateProfile");

module.exports = userController;
