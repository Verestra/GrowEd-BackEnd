const Router = require("express").Router();

const { getAllCourses,
    getMyClass, 
    getStudentTotalScore,
    searchCoursesByName,
    sortCoursesCategory, 
    filterCategory, 
    filterLevel, 
    sortCoursesByPrice, 
    addNewCourse,
    addRegisterToCourse,
    addStudentScore } = require("../handlers/Courses");

// Get All Courses
Router.get("/api/allClass", getAllCourses)

// Get My Class by student_id
Router.get("/api/myClass/:id", getMyClass)

// Get Total Student Score
Router.get("/api/studentScore/:id", getStudentTotalScore)

// Get Search query params
Router.get("/api/", searchCoursesByName)

// Get Sort Courses
Router.get("/api/category/sort/", sortCoursesCategory)

// Get Filter Category by ID
Router.get("/api/category/:id", filterCategory)

// Get Filter Level by ID
Router.get("/api/level/:id", filterLevel)

// Get Price sort
Router.get("/api/price/:price", sortCoursesByPrice)

// POST New Courses
Router.post("/api/addClass", addNewCourse)

// POST Register Student To Course
Router.post("/api/registerClass", addRegisterToCourse)

// POST Student Score
Router.post("/api/addScore", addStudentScore)

module.exports = Router;