const { Doctor, Appointment } = require("../../models");
const { errorMsg } = require("../../_utils/messages");

module.exports = async (req, res) => {
  const { userId } = req;

  try {
    // is the user a Doctor?
    const isDoctor = await Doctor.findOne({ where: { user_id: userId } });

    if (!isDoctor) {
      return res.status(403).json({
        status: "error",
        message: errorMsg.authentication.NOAUTH,
      });
    }
    const appointments = await Appointment.findAll();

    res.status(200).json({
      status: "success",
      appointments,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
