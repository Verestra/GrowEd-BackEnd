let { emailCheck, passwordChange } = require("../models/ResetPassword");
let { sendResponse, sendError } = require("../helpers/Response");

const passwordUpdate = async (req, res) => {
  try {
    let { email, newPassword, passwordMatch } = req.body;
    let emailAvailable = await emailCheck(email);
    if (!email || !newPassword || !passwordMatch){
      return sendResponse(res, false, 400, "An Empty Field")
    }
    if (emailAvailable === false) {
        return sendResponse(res, false, 400, "Email Not Registered")
      }
    if (newPassword !== passwordMatch){
      return sendResponse(res, false, 400, "Password Doesn't Match")
    }
    await passwordChange(newPassword, email)
    return sendResponse(res, true, 200, ("Password Changed"))
  } catch (err) {
    return sendError(res, err)
  }
}
module.exports = {
  passwordUpdate,
};
