const express = require("express");
const authController = require("../controllers/auth");
const router = express.Router();

// register
router.post("/register", authController.register);

//login
router.post("/login", authController.login);

//logout
// router.post("/logout", authController.logout);

module.exports = router;
