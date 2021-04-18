const jwt = require("jsonwebtoken");
const { writeError } = require("../helpers/Response");

const studentOnly = (req, res, next) => {
    const token = req.header("x-access-token").split(" ")[1];
      console.log(token);
    const decodedToken = jwt.decode(token, { complete: true });
      console.log(decodedToken);
    const userData = {
        id_user : decodedToken.payload.id_user,
        username : decodedToken.payload.username,
        role : decodedToken.payload.role_id
    }
    if (decodedToken.payload.role_id === 1) {
      res.locals.userdata = userData
      next();
    }
    else {
      writeError(res, 403, { msg: "Forbidden" });
    }
    
  };

  const fasilitatorOnly = (req, res, next) => {
    const token = req.header("x-access-token").split(" ")[1];
    const decodedToken = jwt.decode(token, { complete: true });
      console.log(decodedToken);
    const userData = {
        id_user : decodedToken.payload.id_user,
        username : decodedToken.payload.username,
        role : decodedToken.payload.role_id
    }
    if (decodedToken.payload.role_id === 2) {
      res.locals.userdata = userData
      next();
    }
    else {
      writeError(res, 403, { msg: "Forbidden" });
    }
  };

module.exports = {
    studentOnly,
    fasilitatorOnly
}