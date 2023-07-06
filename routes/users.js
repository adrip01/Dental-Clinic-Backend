const express = require("express");
const userController = require("../controllers/user");
const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");
const isDoctor = require("../middlewares/isDoctor");
const router = express.Router();

/* GET all users listing as admin */
router.get("/", verifyToken, isAdmin, userController.getAll);

/* acces my profile as any role */
router.get("/profile", verifyToken, userController.userProfile);

/* update my rpfoile as any role*/
router.post("/update-profile", verifyToken, userController.updateProfile);

/* create appointment */
router.post(
  "/create-appointment",
  verifyToken,
  userController.createAppointment
);

/* modify appointment */
router.put(
  "/update-appointment/:id",
  verifyToken,
  userController.updateAppointment
);

/* delete appointment */
router.delete(
  "/delete-appointment/:id",
  verifyToken,
  userController.deleteAppointment
);

/* find user appointments as customer*/
router.get(
  "/user-appointments",
  verifyToken,
  userController.findUserAppointments
);

/* find all appointments as doctor*/
router.get(
  "/all-appointments",
  verifyToken,
  isDoctor,
  userController.allAppointments
);

/* find all customers as doctor*/
router.get(
  "/all-customers",
  verifyToken,
  isDoctor,
  userController.allCustomers
);

module.exports = router;
