const authController = {};

authController.register = require("./register");
authController.login = require("./login");
// authController.logout = require("./logout");

module.exports = authController;
