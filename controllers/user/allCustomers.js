const { Doctor, Customer, User } = require("../../models");
const { errorMsg } = require("../../_utils/messages");

module.exports = async (req, res) => {
  const { userId } = req;

  try {
    const userRole = req.userRole;
    const isDoctor = await Doctor.findOne({ where: { user_id: userId } });
    const isAdmin = userRole == "admin";

    if (!isDoctor && !isAdmin) {
      return res.status(403).json({
        status: "error",
        message: errorMsg.authentication.NOAUTH,
      });
    }

    const customers = await Customer.findAll({
      attributes: { exclude: ["user_id", "createdAt", "updatedAt"] },
      include: {
        model: User,
        as: "user",
        attributes: {
          exclude: ["id", "role_id", "password", "createdAt", "updatedAt"],
        },
      },
    });

    res.status(200).json({
      status: "success",
      customers,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
