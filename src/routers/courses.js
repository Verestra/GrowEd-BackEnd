const Router = require("express").Router();

const { getAllCourses, searchCoursesByName, sortCoursesByCategory, sortCoursesByLevel, sortCoursesByPrice } = require("../handlers/Courses");

// Get All Courses
Router.get("/api/allClass", getAllCourses)

// Get Search query params
Router.get("/api/", searchCoursesByName)

// Get Category by ID
Router.get("/api/category/:id", sortCoursesByCategory)

// Get Level by ID
Router.get("/api/level/:id", sortCoursesByLevel)

// Get Price sort
Router.get("/api/price/:price", sortCoursesByPrice)

module.exports = Router;