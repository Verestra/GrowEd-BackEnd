const { getCoursesModel,
    getMyClassModel,
    getStudentTotalScoreModel,
    searchCourseModel,
    sortCoursesCategoryModel,
    filterCategoryModel,
    filterLevelModel,
    sortPriceModel,
    addCourseModel,
    addRegisterToCourseModel,
    addStudentScoreModel } = require("../models/Courses")
    
const { sendResponse, sendError } = require("../helpers/Response");
const mysql = require("mysql");

const getAllCourses = async (req, res) => {
    try {
        const getAll = await getCoursesModel();
        return sendResponse(res, true, 200, getAll)
    } catch (err) {
        return sendError(res, err)
    }
}

const getMyClass = async (req, res) => {
    try {
        const studentId = req.params.id;
        const myClass = await getMyClassModel(studentId);
        return sendResponse(res, true, 200, "My Class", myClass);
    } catch (err) {
        return sendError(res, err);
    }
};

const getStudentTotalScore = async (req, res) => {
    try {
        const courseStudentId = req.params.id;
        const totalScore = await getStudentTotalScoreModel(courseStudentId);
        return sendResponse(res, true, 200, "Total score", totalScore);
    } catch (err) {
        return sendError(res, err);
    }
};

const searchCoursesByName = async (req, res) => {
    try {
        const { search } = req.query;
        const searchValue = "%" + search + "%";
        if (!search) {
            return sendResponse(res, false, 400, "Search Can't be empty");
        }
        const searchCourse = await searchCourseModel(searchValue);
        return sendResponse(res, true, 200, "All Courses", searchCourse);
    } catch (err) {
        return sendError(res, err);
    }
};

const sortCoursesCategory = async (req, res) => {
    try {
        let { sort1  } = req.query;
        console.log("asd")
        console.log(sort1)
        let sortValue = sort1.split("-").map((q) => {
            switch (q) {
                case "AZ":
                    return mysql.raw("ASC");
                case "ZA":
                    return mysql.raw("DESC");
                default:
                    return mysql.raw(q);
            }
        });
        console.log(sortValue);
        let SortCourse = await sortCoursesCategoryModel(sortValue);
        console.log(SortCourse);
        return sendResponse(res, true, 200, "Succes", SortCourse);
    } catch (err) {
        return sendError(res, err);
    }
};

const filterCategory = async (req, res) => {
    try {
        const idCategory = req.params.id;
        const sortCourse = await filterCategoryModel(idCategory);
        return sendResponse(res, true, 200, "All Filter category", sortCourse);
    } catch (err) {
        return sendError(res, err);
    }
};

const filterLevel = async (req, res) => {
    try {
        const idLevel = req.params.id;
        const sortCourse = await filterLevelModel(idLevel);
        return sendResponse(res, true, 200, "All Filter level", sortCourse);
    } catch (err) {
        return sendError(res, err);
    }
};

const sortCoursesByPrice = async (req, res) => {
    try {
        const searchPrice = req.params.price;
        console.log(searchPrice)
        const sortCourse = await sortPriceModel(searchPrice);
        return sendResponse(res, true, 200, "All Courses sort Price", sortCourse);
    } catch (err) {
        return sendError(res, err);
    }
};

const addNewCourse = async (req, res) => {
    try {
        let { className, categoryId, description, level_id, class_price, schedule, start_time, finish_time } = req.body
        let addCourse = await addCourseModel(className, categoryId, description, level_id, class_price, schedule, start_time, finish_time)
        return sendResponse(res, true, 200, ("Success Add Courses" + addCourse))
    } catch (err) {
        return sendError(res, err)
    }
}

const addRegisterToCourse = async (req, res) => {
    try {
        let { studentId, courseId } = req.body
        let registerToCourse = await addRegisterToCourseModel(studentId, courseId)
        return sendResponse(res, true, 200, ("Success Student Register" + registerToCourse))
    } catch (err) {
        return sendError(res, err)
    }
}

const addStudentScore = async (req, res) => {
    try {
        let { courseStudentId, courseSubId, score } = req.body
        let addScore = await addStudentScoreModel(courseStudentId, courseSubId, score)
        return sendResponse(res, true, 200, ("Success Score Added" + addScore))
    } catch (err) {
        return sendError(res, err)
    }
}

module.exports = {
    getAllCourses,
    getMyClass,
    getStudentTotalScore,
    searchCoursesByName,
    sortCoursesCategory,
    filterCategory,
    filterLevel,
    sortCoursesByPrice,
    addNewCourse,
    addRegisterToCourse,
    addStudentScore
}