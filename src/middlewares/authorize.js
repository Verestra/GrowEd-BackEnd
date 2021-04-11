const jwt = require("jsonwebtoken");
const { writeError } = require("../helpers/Response");

const studentOnly = (req, res, next) => {
    const token = req.header("x-access-token").split(" ")[1];
      console.log(token);
    const decodedToken = jwt.decode(token, { complete: true });
      console.log(decodedToken);
    if (decodedToken.payload.role_id === 1) return next();
    writeError(res, 403, { msg: "Forbidden" });
  };

  const fasilitatorOnly = (req, res, next) => {
    const token = req.header("x-access-token").split(" ")[1];
    const decodedToken = jwt.decode(token, { complete: true });
      console.log(decodedToken);
    if (decodedToken.payload.role_id === 2) return next();
    writeError(res, 403, { msg: "Forbidden" });
  };

module.exports = {
    studentOnly,
    fasilitatorOnly
}