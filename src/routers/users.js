const Router = require("express").Router();

const { registerStudent } = require("../handlers/Register");
const { resetPassword } = require("../handlers/ResetPassword");
const { userLogin } = require("../handlers/Login");
const { DeleteUser } = require("../handlers/DeleteUser")

Router.post("/api/auth/login", userLogin);
Router.post("/api/auth/register", registerStudent);
Router.patch("/api/reset-password", resetPassword);
Router.delete("/api/delete/:id", DeleteUser);


module.exports = Router;