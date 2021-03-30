const Router = require("express").Router();
const usersRouter = require("./users");
const coursesRouter = require("./courses");

Router.use("/courses", coursesRouter)
Router.use("/users", usersRouter);

module.exports = Router;