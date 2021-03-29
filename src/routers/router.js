const Router = require("express").Router();
const Register = require("./register");
const userLogin = require("./Login");
const resetPassword = require("./resetPassword")

Router.post("/api/auth/register", Register);
Router.post("/api/auth/Login", userLogin);
Router.post("/api/reset-password", resetPassword);

module.exports = Router;