const Router = require("express").Router();

let { passwordUpdate } = require("../handlers/ResetPassword");

Router.post("/api/reset-password", passwordUpdate);
module.exports = Router;