const Router = require("express").Router();
const authorize = require("../middlewares/authorize");
const multerUploadImage = require("../middlewares/uploadImage")

const {
    getAllCoursesPagination, 
    getMyClassPagination,
    getMyClassFasilitatorPagination, 
    getStudentTotalScore, 
    filterCategory, 
    filterLevel, 
    addNewCourse,
    addRegisterToCourse,
    addStudentScore } = require("../handlers/Courses");

// Get All Courses Pagination
Router.get("/api/all", getAllCoursesPagination)

// Get My Class Paginated by student_id
Router.get("/api/myClass/", authorize.studentOnly, getMyClassPagination)

// Get My Class Paginated by id_fasilitator
Router.get("/api/myClassFasilitator/", authorize.fasilitatorOnly, getMyClassFasilitatorPagination)

// Get Total Student Score
Router.get("/api/studentScore/", authorize.studentOnly, getStudentTotalScore)

// Get Filter Category by ID
Router.get("/api/category/:id", filterCategory)

// Get Filter Level by ID
Router.get("/api/level/:id", filterLevel)


// POST New Courses
Router.post("/api/addClass", authorize.fasilitatorOnly, multerUploadImage.any("image"), addNewCourse)

// POST Register Student To Course
Router.post("/api/registerClass", addRegisterToCourse)

// POST Student Score
Router.post("/api/addScore", addStudentScore)

Router.post("/api/upload", multerUploadImage.single("image"), (req, res) => {
    const { file } = req;
    const url = `/images/${file.filename}`;
    res.status(200).json({
      msg: "Upload Success",
      url,
    });
  });

module.exports = Router;