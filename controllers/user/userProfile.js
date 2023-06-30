const { errorMsg } = require("../../_utils/messages");
const { User, Customer, Doctor, Role } = require("../../models");

const models = require("../../models/index");

module.exports = async (req, res) => {
  try {
    const { userId } = req;

    const user = await User.findOne({
      attributes: {
        exclude: ["id", "role_id", "password", "createdAt", "updatedAt"],
      },

      include: [
        {
          model: Role,
          as: "role",
          attributes: { exclude: ["id", "createdAt", "updatedAt"] },
        },
        {
          model: Customer,
          as: "customer",
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
        {
          model: Doctor,
          as: "doctor",
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: errorMsg.user.NOTFOUND,
      });
    }

    res.status(200).json({
      results: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: errorMsg.user.GETONE,
    });
  }
};
