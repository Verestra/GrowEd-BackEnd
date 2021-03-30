const Router = require("express").Router();

let { registerStudent } = require("../handlers/Register");
let { resetPassword } = require("../handlers/ResetPassword");
let { userLogin } = require("../handlers/Login");

Router.post("/api/auth/login", userLogin);
Router.post("/api/auth/register", registerStudent);
Router.patch("/api/reset-password", resetPassword);

module.exports = Router;