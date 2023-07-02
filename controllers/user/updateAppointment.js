const { Customer, Doctor, Appointment } = require("../../models");
const { successMsg, errorMsg } = require("../../_utils/messages");

module.exports = async (req, res) => {
  const { userId } = req;
  const { customer_id, doctor_id, date, time } = req.body;
  const appointmentId = req.params.id;

  try {
    let appointment;

    // getting the apointment by id
    appointment = await Appointment.findOne({ where: { id: appointmentId } });

    if (!appointment) {
      return res.status(404).json({
        status: "error",
        message: errorMsg.appointment.NOTFOUND,
      });
    }

    // is the user a Customer?
    const isCustomer = await Customer.findOne({ where: { user_id: userId } });
    if (isCustomer && isCustomer.id === appointment.customer_id) {
      appointment = await appointment.update({
        doctor_id,
        date,
        time,
      });
    } else {
      // is the user a Doctor?
      const isDoctor = await Doctor.findOne({ where: { user_id: userId } });
      if (isDoctor && isDoctor.id === appointment.doctor_id) {
        appointment = await appointment.update({
          customer_id,
          date,
          time,
        });
      } else {
        return res.status(400).json({
          status: "error",
          message: errorMsg.authentication.NOAUTH,
        });
      }
    }

    res.status(200).json({
      message: successMsg.appointment.UPDATE,
      appointment,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
