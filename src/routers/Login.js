const Router = require("express").Router();

let { userLogin } = require("../handlers/Login");

Router.post("/api/auth/Login", userLogin);

module.exports = Router;