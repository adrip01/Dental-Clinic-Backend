const { Appointment } = require("../../models");
const { errorMsg } = require("../../_utils/messages");

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const appointment = await Appointment.findOne({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: { id: id },
    });

    res.status(200).json({
      results: appointment,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: errorMsg.appointment.GETONE,
    });
  }
};
