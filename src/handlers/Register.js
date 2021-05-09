let { usernameValidate, emailValidate, registerUser } = require("../models/Register");
let { sendResponse, sendError } = require("../helpers/Response");

const registerStudent = async (req, res) => {
    try {
        const { username, email, password, passwordMatch } = req.body;
        let usernameAvailable = await usernameValidate(username);
        let emailAvailable = await emailValidate(email);
        if (!username || !email || !password || !passwordMatch) {
            return sendResponse(res, false, 400, "Field can't be empty");
        }
        if (usernameAvailable === false) {
            return sendResponse(res, false, 400, "Username Already Exist");
        }
        if (emailAvailable === false) {
            return sendResponse(res, false, 400, "Email Already Registered");
        }
        if (password !== passwordMatch) {
            return sendResponse(res, false, 422, "Password doesn't match");
        }

        await registerUser(username, email, password);
        return sendResponse(res, true, 201, "Account created!");
    } catch (error) {
        console.log(error)
        return sendError(res, error);
    }
};


module.exports = { registerStudent };
