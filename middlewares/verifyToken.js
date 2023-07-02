const { errorMsg } = require("../_utils/messages");
const { getTokenFromHeader, decodedToken } = require("../_utils/token");

module.exports = (req, res, next) => {
  // verify if there's a token
  const token = getTokenFromHeader(req.headers);

  if (!token) {
    return res.status(401).json({
      status: "Error",
      message: errorMsg.token.NOTFOUND,
    });
  }

  try {
    // decode token
    const decoded = decodedToken(token);

    // modify Request object
    req.userId = decoded.userId;
    req.userName = decoded.userName;
    req.userRole = decoded.userRole;
    console.log(decoded);

    // execute next function in middlewares cycle
    next();
    
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: "Invalid token",
    });
  }
};
