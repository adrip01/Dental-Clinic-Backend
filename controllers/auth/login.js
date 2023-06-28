const bcrypt = require("bcrypt");
const { generateToken } = require("../../_utils/token");
// const { errorMsg } = require("../../_utils/messages");

const { Role, User } = require("../../models");

/**
 * Login user
 * Url example: [POST] http://localhost:3000/auth/login
 * @param {*} req Request object
 * @param {*} res Response object
 */
module.exports = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      status: "Error",
      message: error.message,
    });
  }

  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
      include: [{ model: Role, as: "role" }],
    });

    if (!user) {
      return res.status(400).json({
        status: "Error",
        message: error.message,
      });
    }

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        status: "Error",
        message: "Invalid email or password.",
      });
    }

    const token = generateToken({
      userId: user.id,
      userName: user.user_first_name,
      userRole: user.role.role,
    });

    res.status(200).json({
      token,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};
