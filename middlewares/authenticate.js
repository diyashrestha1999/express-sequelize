const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  // console.log("thisss", req.headers.token);
  let authHeader = req.headers.authorization;
  console.log("authHeader", authHeader);
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  if (authHeader.startsWith("Bearer")) {
    authHeader = authHeader.split(" ")[1];
  }

  console.log("thisss", authHeader);

  try {
    req.user = jwt.verify(authHeader, process.env.SECRECT_KEY);
    next();
  } catch (error) {
    return res.status(401).json({ message: "Auth error: Invalid token" });
  }
}

module.exports = authenticateToken;
