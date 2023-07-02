const { Customer, Doctor, Appointment } = require("../../models");
const { successMsg, errorMsg } = require("../../_utils/messages");

module.exports = async (req, res) => {
  const { userId, userRole } = req;
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

    // check if the user is the customer or the doctor from the appointment
    const isCustomer = await Customer.findOne({ where: { user_id: userId } });
    const isDoctor = await Doctor.findOne({ where: { user_id: userId } });

    if (
      (isCustomer && isCustomer.id === appointment.customer_id) ||
      (isDoctor && isDoctor.id === appointment.doctor_id) ||
      userRole === "admin"
    ) {
      await appointment.destroy();

      return res.status(200).json({
        message: successMsg.appointment.DELETE,
      });
    }

    return res.status(400).json({
      status: "error",
      message: errorMsg.authentication.NOAUTH,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
