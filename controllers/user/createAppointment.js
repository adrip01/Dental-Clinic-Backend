const { Customer, Doctor, Appointment } = require("../../models");
const { successMsg, errorMsg } = require("../../_utils/messages");


module.exports = async (req, res) => {
  const { userId } = req;
  const { customer_id, doctor_id, date, time } = req.body;

  try {
    let appointment;

    // is the user a Customer?
    const isCustomer = await Customer.findOne({ where: { user_id: userId } });
    if (isCustomer) {
      appointment = await Appointment.create({
        customer_id: isCustomer.id,
        doctor_id,
        date,
        time,
      });
    } else {
      // is the user a Doctor?
      const isDoctor = await Doctor.findOne({ where: { user_id: userId } });
      if (isDoctor) {
        appointment = await Appointment.create({
          customer_id,
          doctor_id: isDoctor.id,
          date,
          time,
        });
      } else {
        // for other roles, insert manually customer_id and doctor_id, both required
        if (!customer_id || !doctor_id) {
          return res.status(400).json({
            status: "error",
            message: errorMsg.appointment.REQUIERED,
          });
        }

        appointment = await Appointment.create({
          customer_id,
          doctor_id,
          date,
          time,
        });
      }
    }

    res.status(201).json({
      message: successMsg.appointment.CREATE,
      appointment,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
