let { Login } = require("../models/Login");

let { sendResponse} = require("../helpers/Response");

const userLogin = (req, res) => {
  const { userNameOrEmail, password } = req.body;
  if (!userNameOrEmail) {
    return sendResponse(res, false, 400, "Enter Username or Email");
  }
  if (!password) {
    return sendResponse(res, false, 400, "Enter Password");
  }
  Login(userNameOrEmail, password)
    .then((result) => {
      if (result.length === 0) {
        return sendResponse(res, false, 400, "Data is not registered");
      } else {
        res.send(result);
      }
    })
    .catch((err) => {
      console.log(err);
      res.json(new Error(err));
    });
};

module.exports = { userLogin };
