const express = require("express");
const userController = require("../controllers/user");
const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");
const router = express.Router();

/* GET users listing. */
router.get("/", verifyToken, isAdmin, userController.getAll);

/* acces my rpfoile */
router.get("/profile", verifyToken, userController.userProfile);

/* update my rpfoile */
router.post("/update-profile", verifyToken, userController.updateProfile);

/* create appointment */
router.post(
  "/create-appointment",
  verifyToken,
  userController.createAppointment
);

module.exports = router;
