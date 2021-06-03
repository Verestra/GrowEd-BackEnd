const {getAllCoursesPaginationModel,
    getMyClassModel,
    getMyClassFasilitatorModel,
    getStudentTotalScoreModel,
    getStudentTotalScoreModelLimit3,
    getStudentClassProgressModel,
    filterCategoryModel,
    filterLevelModel,
    addCourseModel,
    addRegisterToCourseModel,
    addStudentScoreModel } = require("../models/Courses");

const { sendResponse, sendError, writeError, writeResponsePaginated } = require("../helpers/Response");

const getAllCoursesPagination = (req, res) => {
    const { query, baseUrl, path, hostname, protocol } = req;
    
    getAllCoursesPaginationModel(query)
        .then((finalResult) => {
            const { result, count, page, limit } = finalResult;
            const totalPage = Math.ceil(count / limit);
            // count limit total
            // 8      3     3
            // 10     4     3
            const url =
                protocol + "://" + hostname + ":" + process.env.PORT + baseUrl + path;
            const prev =
                page === 1 ? null : url + `?page=${page - 1}&limit=${query.limit || 3}`;
            const next =
                page === totalPage
                    ? null
                    : url + `?page=${page + 1}&limit=${query.limit || 3}`;
            const info = {
                count,
                page,
                totalPage,
                next,
                prev,
            };
            writeResponsePaginated(res, 200, result, info);
        })
        .catch((err) => {
            console.log(err);
            writeError(res, 500, err);
        });
};


const getMyClassPagination = (req, res) => {
    const { query, baseUrl, path, hostname, protocol } = req;
    const { id_user } = req.res.locals.userdata
    const studentId = id_user;
    
    getMyClassModel(studentId ,query)
        .then((finalResult) => {
            const { result, count, page, limit } = finalResult;
            const totalPage = Math.ceil(count / limit);
            // count limit total
            // 8      3     3
            // 10     4     3
            const url =
                protocol + "://" + hostname + ":" + process.env.PORT + baseUrl + path;
            const prev =
                page === 1 ? null : url + `?page=${page - 1}&limit=${query.limit || 3}`;
            const next =
                page === totalPage
                    ? null
                    : url + `?page=${page + 1}&limit=${query.limit || 3}`;
            const info = {
                count,
                page,
                totalPage,
                next,
                prev,
            };
            writeResponsePaginated(res, 200, result, info, req.res.locals.userdata);
        })
        .catch((err) => {
            console.log(err);
            writeError(res, 500, err);
        });
};

// const getMyClass = async (req, res) => {
//     try {
//         const { id_user } = req.res.locals.userdata
//         console.log(id_user)
//         const studentId = id_user;
//         const myClass = await getMyClassModel(studentId);
//         return sendResponse(res, true, 200, req.res.locals.userdata, myClass, );
//     } catch (err) {
//         return sendError(res, err);
//     }
// };

const getMyClassFasilitatorPagination = (req, res) => {
    const { query, baseUrl, path, hostname, protocol } = req;
    const { id_user } = req.res.locals.userdata
    
    getMyClassFasilitatorModel(id_user ,query)
        .then((finalResult) => {
            const { result, count, page, limit, counting } = finalResult;
            const totalPage = Math.ceil(count / limit);
            const url =
                protocol + "://" + hostname + ":" + process.env.PORT + baseUrl + path;
            const prev =
                page === 1 ? null : url + `?page=${page - 1}&limit=${query.limit || 3}`;
            const next =
                page === totalPage
                    ? null
                    : url + `?page=${page + 1}&limit=${query.limit || 3}`;
            const info = {
                count,
                page,
                totalPage,
                next,
                prev,
                counting
            };
            
            writeResponsePaginated(res, 200, result, info, req.res.locals.userdata);
        })
        .catch((err) => {
            console.log(err);
            writeError(res, 500, err);
        });
};

// const getMyClassFasilitator = async (req, res) => {
//     try {
//         const { id_user } = req.res.locals.userdata
//         console.log(id_user)
//         const myClass = await getMyClassFasilitatorModel(id_user);
//         return sendResponse(res, true, 200, req.res.locals.userdata, myClass, );
//     } catch (err) {
//         return sendError(res, err);
//     }
// };

const getStudentTotalScore = async (req, res) => {
    try {
        const {id_user} = req.res.locals.userdata;
        const totalScore = await getStudentTotalScoreModel(id_user);
        return sendResponse(res, true, 200, "Total score", totalScore);
    } catch (err) {
        return sendError(res, err);
    }
};
const getStudentTotalScoreLimit3 = async (req, res) => {
    try {
        const {id_user} = req.res.locals.userdata;
        const totalScore = await getStudentTotalScoreModelLimit3(id_user);
        return sendResponse(res, true, 200, "Total score", totalScore);
    } catch (err) {
        return sendError(res, err);
    }
};

const getStudentClassProgress = async (req, res) => {
    try {
        const {id_user} = req.res.locals.userdata;
        const classProgress = await getStudentClassProgressModel(id_user);
        return sendResponse(res, true, 200, "Student Progress", classProgress);
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

const addNewCourse = async (req, res) => {
    try {
        const {files} = req
        if (files) {
            console.log(files)
            const newPathFile = files[0].filename;
            console.log(newPathFile)
            req.body.image = newPathFile;
          }
        let {id_user} = req.res.locals.userdata
        let { className, 
            categoryId, 
            description, 
            level_id, 
            class_price, 
            schedule, 
            start_time, 
            finish_time, 
            image} = req.body
        await addCourseModel(id_user, className, 
            categoryId, 
            description, 
            level_id, 
            class_price, 
            schedule, 
            start_time, 
            finish_time, 
            image)
        return sendResponse(res, true, 200, ("Success Add Courses"))
    } catch (err) {
        console.log(err)
        return sendError(res, err)
    }
}

const addRegisterToCourse = async (req, res) => {
    try {
        let { studentId, courseId } = req.body
        let registerToCourse = await addRegisterToCourseModel(studentId, courseId)
        return sendResponse(res, true, 200, registerToCourse, (`Succes Register To Class ${res} ${registerToCourse}`))
    } catch (err) {
        return sendError(res, err)
    }
}

const addStudentScore = async (req, res) => {
    try {
        let { student_id , course_sub_id, score } = req.body
        await addStudentScoreModel(student_id , course_sub_id, score)
        return sendResponse(res, true, 200, ("Success Score Added"))
    } catch (err) {
        return sendError(res, err)
    }
}

module.exports = {
    getAllCoursesPagination,
    getMyClassPagination,
    getMyClassFasilitatorPagination,
    // getMyClass,
    // getMyClassFasilitator,
    getStudentTotalScore,
    getStudentTotalScoreLimit3,
    getStudentClassProgress,
    filterCategory,
    filterLevel,
    addNewCourse,
    addRegisterToCourse,
    addStudentScore
}