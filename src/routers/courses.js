const Router = require("express").Router();

const { getAllCourses, searchCoursesByName, sortCoursesByCategory, sortCoursesByLevel, sortCoursesByPrice, addNewCourse} = require("../handlers/Courses");

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

// POST New Courses
Router.post("/api/addClass", addNewCourse)

module.exports = Router;