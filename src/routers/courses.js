const Router = require("express").Router();

const { getAllCourses, searchCoursesByName, sortCoursesByCategory, sortCoursesByLevel, sortCoursesByPrice } = require("../handlers/Courses");

Router.get("/api/allClass", getAllCourses)
Router.get("/api/", searchCoursesByName)
Router.get("/api/category/:id", sortCoursesByCategory)
Router.get("/api/level/:id", sortCoursesByLevel)
Router.get("/api/price/:price", sortCoursesByPrice)

module.exports = Router;