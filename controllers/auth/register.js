const bcrypt = require("bcrypt");
const { Customer, User } = require("../../models");
const { successMsg } = require("../../_utils/messages");

/**
 * Create new user
 * Url example: [POST] http://localhost:3000/auth/register
 * @param {*} req Request object
 * @param {*} res Response object
 */
module.exports = async (req, res) => {
  const { user_first_name, user_last_name, email, password } = req.body;

  if (password.lenght < 8) {
    return res.status(400).json({
      status: "Error",
      message: errorMsg.user.PASSWORDLEN,
    });
  }

  try {
    const hash = bcrypt.hashSync(password, 10);

    const newUser = {
      role_id: 2, // role = user
      user_first_name,
      user_last_name,
      email,
      password: hash,
    };

    const user = await User.create(newUser);

    const newCustomer = {
      user_id: user.id,
    };

    const customer = await Customer.create(newCustomer);

    res.status(201).json({
      message: successMsg.user.CREATE,
    });
  } catch (error) {
    console.log(error.name);

    const statusCode =
      error.name == "SequelizeUniqueConstraintError" ||
      error.name == "SequelizeValidationError"
        ? 400
        : 500;

    res.status(statusCode).json({
      status: "Error",
      message: errorMsg.user.CREATE,
    });
  }
};
