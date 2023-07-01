const { errorMsg, successMsg } = require("../../_utils/messages");
const { User, Role } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { userId } = req;
    const { user_first_name, user_last_name, birthday, email, phone_number } =
      req.body;

    const user = await User.findOne({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: errorMsg.user.NOTFOUND,
      });
    }

    const updateUser = await User.update(
      {
        user_first_name: user_first_name || user.user_first_name,
        user_last_name: user_last_name || user.user_last_name,
        birthday: birthday || user.birthday,
        email: email || user.email,
        phone_number: phone_number || user.phone_number,
      },
      {
        where: {
          id: userId,
        },
      }
    );

    updateUser;

    const updatedUser = await User.findOne({
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

    res.status(200).json({
      message: successMsg.user.UPDATE,
      results: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: errorMsg.user.UPDATE,
    });
  }
};
