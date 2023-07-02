const { errorMsg } = require("../../_utils/messages");
const { User, Role } = require("../../models");

module.exports = async (req, res) => {
  const { userId } = req;

  try {
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
