const errorMsg = {
  user: {
    CREATE: "Error creating user",
    UPDATE: "Error updating user",
    DELETE: "Error deleting user",
    GETALL: "Error retreiving all users",
    GETONE: "Error retreiving user",
    NOTFOUND: "User not found",
    PASSWORDLEN: "Password length can not be less than 8",
    NOAPPOINT: "This user don't has appointments"
  },

  pagination: {
    SURPASS: "There is nothing here",
  },

  token: {
    NOTFOUND: "No authorization token was found",
    INVALID: "Invalid token",
  },

  authentication: {
    NOAUTH: "Don't have authorization",
    BADCREDENTIALS: "These credentials do not match our records",
    REQUIERED: "Email and Password are required",
    LOGINFAILED: "User login failed",
  },
  appointment: {
    NOAUTH: "Don't have authorization",
    REQUIERED: "Customer and doctor are required.",
    NOTFOUND: "Appointment not found",

  },
};

const successMsg = {
  user: {
    CREATE: "User created succsessfully",
    UPDATE: "User updated succsessfully",
    DELETE: "User deleted succsessfully",
  },
  appointment: {
    CREATE: "Appointment created succsessfully",
    UPDATE: "Appointment updated succsessfully",
    DELETE: "Appointment deleted succsessfully",
  },
};

module.exports = {
  successMsg,
  errorMsg,
};
