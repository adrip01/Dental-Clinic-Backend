const express = require("express");
const router = express.Router();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");


// home page
router.use("/", indexRouter);

// users
router.use("/users", usersRouter);

module.exports = router;
