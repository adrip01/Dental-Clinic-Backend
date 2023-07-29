const bcrypt = require("bcrypt");
const { generateToken } = require("../../_utils/token");
const { errorMsg } = require("../../_utils/messages");

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
      message: errorMsg.authentication.REQUIERED,
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
        message: errorMsg.authentication.BADCREDENTIALS,
      });
    }

    const userRole = user.role.role;
    let customer;
    let doctor;
    if (userRole == "user") {
      customer = await user.getCustomer();
    } else if (userRole == "doctor") {
      doctor = await user.getDoctor();
    }

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        status: "Error",
        message: errorMsg.authentication.BADCREDENTIALS,
      });
    }

    const token = generateToken({
      userId: user.id,
      userName: user.user_first_name,
      userLastName: user.user_last_name,
      userRole: user.role.role,
      customerId: customer?.id,
      doctorId: doctor?.id,
    });

    res.status(200).json({
      token,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: errorMsg.authentication.LOGINFAILED,
    });
  }
};
