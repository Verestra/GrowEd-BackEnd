const Router = require("express").Router();
const authorize = require("../middlewares/authorize");
const multerUploadImage = require("../middlewares/uploadImage")

const { registerStudent } = require("../handlers/Register");
const { resetPassword } = require("../handlers/ResetPassword");
const { userLogin } = require("../handlers/Login");
const { updateProfilePic } = require("../handlers/User");
// const { DeleteUser } = require("../handlers/DeleteUser")

Router.post("/api/auth/login", userLogin);
Router.post("/api/auth/register", registerStudent);
Router.patch("/api/uploadProfile", authorize.studentOnly, multerUploadImage.any("image"), updateProfilePic);
Router.patch("/api/auth/reset-password", resetPassword), 
// Router.delete("/api/delete/:id", DeleteUser);


module.exports = Router;