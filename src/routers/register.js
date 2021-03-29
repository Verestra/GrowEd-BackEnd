// Router
const Router = require("express").Router();

let { registerStudent } = require("../handlers/register")

Router.post("/api/auth/register", registerStudent);

module.exports = Router;