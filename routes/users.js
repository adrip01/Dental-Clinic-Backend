const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();

/* GET users listing. */
router.get("/", userController.getAll);

module.exports = router;
