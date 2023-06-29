const { errorMsg } = require("../../_utils/messages");
const { User, Customer, Doctor, Role } = require("../../models");


const models = require("../../models/index");


module.exports = async (req, res) => {
  try {
    const user_id = req.decodedToken.userId;
    console.log(user_id);

    const user = await User.findOne({
      where: { id: user_id },

      attributes: [
        "id",
        ["user_first_name", "name"],
        ["user_last_name", "last_name"],
      ],

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
    });

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "Perfil de usuario no encontrado",
      });
    }

    res.status(200).json({
      results: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
