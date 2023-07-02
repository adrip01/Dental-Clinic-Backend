const { Customer, Doctor, Appointment } = require("../../models");
const { errorMsg } = require("../../_utils/messages");

module.exports = async (req, res) => {
  const { userId } = req;

  try {
    let appointments;

    // is the user a Customer?
    const isCustomer = await Customer.findOne({ where: { user_id: userId } });

    if (isCustomer) {
      appointments = await Appointment.findAll({
        where: { customer_id: isCustomer.id },
      });
    } else {
      // is the user a Doctor?
      const isDoctor = await Doctor.findOne({ where: { user_id: userId } });

      if (isDoctor) {
        appointments = await Appointment.findAll({
          where: { doctor_id: isDoctor.id },
        });
      } else {
        return res.status(404).json({
          status: "error",
          message: errorMsg.user.NOTFOUND,
        });
      }
    }

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
