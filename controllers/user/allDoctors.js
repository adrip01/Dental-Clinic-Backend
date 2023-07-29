const { Doctor, User, Speciality } = require("../../models");
const { errorMsg } = require("../../_utils/messages");

module.exports = async (req, res) => {
  try {
    const doctors = await Doctor.findAll({
      attributes: { exclude: ["user_id", "spec_id", "createdAt", "updatedAt"] },
      include: [
        {
          model: User,
          as: "user",
          attributes: {
            exclude: ["id", "role_id", "password", "createdAt", "updatedAt"],
          },
        },
        {
          model: Speciality,
          as: "speciality",
          attributes: ["id", "speciality"],
        },
      ],
    });

    res.status(200).json({
      status: "success",
      doctors,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
