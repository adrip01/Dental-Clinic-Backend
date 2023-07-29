const express = require("express");
const userController = require("../controllers/user");
const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");
const isDoctor = require("../middlewares/isDoctor");
const router = express.Router();

/* GET all users list as admin */
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

/* find an appointment */
router.get("/appointment/:id", 
verifyToken, 
userController.getAppointment);

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

/* find user appointments*/
router.get(
  "/user-appointments",
  verifyToken,
  userController.findUserAppointments
);

/* find all appointments as doctor or admin*/
router.get("/all-appointments", verifyToken, userController.allAppointments);

/* find all customers as doctor or admin*/
router.get("/all-customers", verifyToken, userController.allCustomers);

/* find all doctors*/
router.get("/all-doctors", verifyToken, userController.allDoctors);

module.exports = router;
