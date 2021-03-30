const { getCoursesModel, searchCourseModel, sortCategoryModel, sortLevelModel, sortPriceModel } = require("../models/Courses")
const { sendResponse, sendError } = require("../helpers/Response");

const getAllCourses = async (req, res) => {
    try {
        const getAll = await getCoursesModel();
        return sendResponse(res, true, 200, getAll)
    } catch (err) {
        return sendError(res, err)
    }
}

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

const sortCoursesByCategory = async (req, res) => {
    try {
        const idCategory = req.params.id;
        const sortCourse = await sortCategoryModel(idCategory);
        return sendResponse(res, true, 200, "All Courses sort category", sortCourse);
    } catch (err) {
        return sendError(res, err);
    }
};

const sortCoursesByLevel = async (req, res) => {
    try {
        const idLevel = req.params.id;
        const sortCourse = await sortLevelModel(idLevel);
        return sendResponse(res, true, 200, "All Courses sort level", sortCourse);
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

module.exports = {
    getAllCourses,
    searchCoursesByName,
    sortCoursesByCategory,
    sortCoursesByLevel,
    sortCoursesByPrice
}