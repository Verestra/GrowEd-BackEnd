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

let sortCategoryModel = (idCategory) => {
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

  let sortLevelModel = (idLevel) => {
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
      let addquery =
        "INSERT INTO `courses` (`class_name`, `category_id`, `description`, `level_id`, `class_price`, `schedule`, `start_time`, `finish_time`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
      db.query(
        addquery,
        [className, categoryId, description, level_id, class_price, schedule, start_time, finish_time],
        function (err, result) {
          if (err) return reject(err);
          return resolve(result);
        }
      );
    });
  };

  module.exports = {
      getCoursesModel,
      searchCourseModel,
      sortCategoryModel,
      sortLevelModel,
      sortPriceModel,
      addCourseModel
  }