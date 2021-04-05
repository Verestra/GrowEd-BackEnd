const db = require("../database/dbMySql");

const getCoursesModel = () => {
    return new Promise((resolve, reject) => {
        const qsGetCourses = "SELECT * FROM `courses`";
        db.query(qsGetCourses, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

let getMyClassModel = (studentId) => {
  return new Promise((resolve, reject) => {
    const qsMyClass =
      "SELECT courses.* , courses_student.course FROM courses INNER JOIN courses_student ON courses.id_courses = courses_student.id WHERE courses_student.student = ?";
    db.query(qsMyClass, [studentId], (err, result) => {
      if (err) return reject(err);
      if (result.length === 0) {
        return reject(false);
      }
      return resolve(result);
    });
  });
};

let getStudentTotalScoreModel = (courseStudentId) => {
  return new Promise((resolve, reject) => {
    const qsMyClass =
      "SELECT AVG(score) from student_progress WHERE course_student_id = ?";
    db.query(qsMyClass, [courseStudentId], (err, result) => {
      if (err) return reject(err);
      if (result.length === 0) {
        return reject(false);
      }
      return resolve(result);
    });
  });
};

let searchCourseModel = (searchValue) => {
    return new Promise((resolve, reject) => {
      const qsSearchCourse =
        "SELECT `id_courses`, `class_name`, `category_id`, `description`, `level_id`, `class_price`, `schedule`, `start_time`, `finish_time` FROM `courses` WHERE class_name LIKE ?";
      db.query(qsSearchCourse, [searchValue], (err, result) => {
        if (err) return reject(err);
        if (result.length === 0) {
          return reject(false);
        }
        return resolve(result);
      });
    });
  };

  let sortCoursesCategoryModel = (sortValue) => {
    return new Promise((resolve, reject) => {
      const sortquery =
        "SELECT * FROM `courses` ORDER BY ? ?";
      db.query(sortquery, sortValue, (err, result) => {
        if (err) return reject(err);
        if (result.length === 0) {
          return reject(false);
        }
        return resolve(result);
      });
    });
  };

let filterCategoryModel = (idCategory) => {
    return new Promise((resolve, reject) => {
      const qsCategory =
        "SELECT courses.* , courses_category.category_name FROM courses INNER JOIN courses_category ON courses.category_id = courses_category.category_id WHERE courses.category_id = ?";
      db.query(qsCategory, [idCategory], (err, result) => {
        if (err) return reject(err);
        if (result.length === 0) {
          return reject(false);
        }
        return resolve(result);
      });
    });
  };

  let filterLevelModel = (idLevel) => {
    return new Promise((resolve, reject) => {
      const qsLevel =
        "SELECT courses.* , courses_level.level_name FROM courses INNER JOIN courses_level ON courses.level_id = courses_level.level_id WHERE courses.level_id = ?";
      db.query(qsLevel, [idLevel], (err, result) => {
        if (err) return reject(err);
        if (result.length === 0) {
          return reject(false);
        }
        return resolve(result);
      });
    });
  };

  let sortPriceModel = (searchPrice) => {
    return new Promise((resolve, reject) => {
      const qsPrice =
        "SELECT id_courses, class_name, category_id, description, level_id, class_price, schedule, start_time, finish_time FROM courses ORDER BY courses.class_price ?";
      db.query(qsPrice, [searchPrice], (err, result) => {
        if (err) return reject(err);
        if (result.length === 0) {
          return reject(false);
        }
        return resolve(result);
      });
    });
  };

  let addCourseModel = (className, categoryId, description, level_id, class_price, schedule, start_time, finish_time) => {
    return new Promise((resolve, reject) => {
      let qsAddCourse =
        "INSERT INTO `courses` (`class_name`, `category_id`, `description`, `level_id`, `class_price`, `schedule`, `start_time`, `finish_time`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
      db.query(
        qsAddCourse,
        [className, categoryId, description, level_id, class_price, schedule, start_time, finish_time],
        function (err, result) {
          if (err) return reject(err);
          return resolve(result);
        }
      );
    });
  };

  let addRegisterToCourseModel = (studentId, courseId) => {
    return new Promise((resolve, reject) => {
      let qsRegister =
        "INSERT INTO `courses_student` (`student`, `course`) VALUES (?, ?)";
      db.query(
        qsRegister,
        [studentId, courseId],
        function (err, result) {
          if (err) return reject(err);
          return resolve(result);
        }
      );
    });
  };

  let addStudentScoreModel = (courseStudentId, courseSubId, score) => {
    return new Promise((resolve, reject) => {
      let qsAddScore =
        "INSERT INTO `student_progress` (`course_student_id`, `course_sub_id`, `score`) VALUES (?, ?, ?);";
      db.query(
        qsAddScore,
        [courseStudentId, courseSubId, score],
        function (err, result) {
          if (err) return reject(err);
          return resolve(result);
        }
      );
    });
  };


  module.exports = {
      getCoursesModel,
      getMyClassModel,
      getStudentTotalScoreModel,
      searchCourseModel,
      sortCoursesCategoryModel,
      filterCategoryModel,
      filterLevelModel,
      sortPriceModel,
      addCourseModel,
      addRegisterToCourseModel,
      addStudentScoreModel
  }