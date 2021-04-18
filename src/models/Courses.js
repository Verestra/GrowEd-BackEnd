const db = require("../database/dbMySql");
const mysql = require("mysql");

const getAllCoursesPaginationModel = (query) => {
  return new Promise((resolve, reject) => {
    const qs =
      'SELECT c.id_courses, c.class_name, ct.category_name, c.description, cl.level_name, c.class_price, c.schedule,  c.finish_time, c.image FROM courses c JOIN courses_category ct ON c.category_id = ct.category_id JOIN courses_level cl ON c.level_id = cl.level_id';
    const searchValue =  "WHERE class_name LIKE ?"
    let sortBy = "ORDER BY ?"
    const paginate = "LIMIT ? OFFSET ?";
    const qsWithPaginate = qs.concat(" ", searchValue, " ", sortBy, " ", paginate);
    const sortValue = query.sort || null;

    if (sortValue) {
      switch (sortValue.toLowerCase()) {
        case "category":
          sortBy = mysql.raw("category_id");
          break;
        case "level":
          sortBy = mysql.raw("level_id");
          break;
        case "price":
          sortBy = mysql.raw("class_price");
          break;
        default:
          sortBy = null;
          break;
      }
    }
    console.log(sortValue)
    const searchValues = "%" + (query.search) + "%" || "%%";
    const limit = Number(query.limit) || 3;
    
    const page = Number(query.page) || 1;
    const offset = (page - 1) * limit;
    // console.log(limit, page, offset);
    db.query(qsWithPaginate, [searchValues, sortBy, limit, offset], (err, result) => {
      if (err) return reject(err);

      const qsCount = 'SELECT COUNT(*) AS "count" FROM courses';
      db.query(qsCount, (err, data) => {
        if (err) return reject(err);
        const { count } = data[0];
        let finalResult = {
          result,
          count,
          page,
          limit,
        };
        resolve(finalResult);
      });
      // count page next prev
    });
  });
};

let getMyClassModel = (studentId, query) => {
  return new Promise((resolve, reject) => {
    const qsMyClass =
      "SELECT c.id_courses, cs.student, c.class_name, ct.category_name, c.description, cl.level_name, c.class_price, c.schedule,  c.finish_time, c.image FROM courses c JOIN courses_category ct ON c.category_id = ct.category_id JOIN courses_level cl ON c.level_id = cl.level_id JOIN courses_student cs ON c.id_courses = cs.course WHERE cs.student = ? ORDER BY c.id_courses";
    const paginate = "LIMIT ? OFFSET ?";
    const qsWithPaginate = qsMyClass.concat(" ", paginate);
    const limit = Number(query.limit) || 3;
    const page = Number(query.page) || 1;
    const offset = (page - 1) * limit;
    // console.log(limit, page, offset);
    db.query(qsWithPaginate, [studentId ,limit, offset], (err, result) => {
      if (err) return reject(err);

      const qsCount = 'SELECT COUNT(*) AS "count" FROM courses_student WHERE student = ?';
      // escaped character (\) => sehingga tanda yang digunakan sebagai syntax muncul sebagai string
      db.query(qsCount,[studentId], (err, data) => {
        if (err) return reject(err);

        const { count } = data[0];
        let finalResult = {
          result,
          count,
          page,
          limit,
        };
        resolve(finalResult);
      });
      // count page next prev
    });
  });
};

let getStudentTotalScoreModel = (courseStudentId) => {
  return new Promise((resolve, reject) => {
    const qsMyClass =
      "SELECT AVG(score) from student_progress WHERE student_id = ?";
    db.query(qsMyClass, [courseStudentId], (err, result) => {
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


  let addCourseModel = (id_user, className, categoryId, description, level_id, class_price, schedule, start_time, finish_time, image) => {
    return new Promise((resolve, reject) => {
      let qsAddCourse =
        "INSERT INTO `courses` (`id_fasilitator`, `class_name`, `category_id`, `description`, `level_id`, `class_price`, `schedule`, `start_time`, `finish_time`, `image`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      db.query(
        qsAddCourse,
        [id_user, className, categoryId, description, level_id, class_price, schedule, start_time, finish_time, image],
        function (err, result) {
          if (err) return reject(err);
          return resolve(result);
        }
      );
    });
  };

  let getMyClassFasilitatorModel = (id_user, query) => {
    return new Promise((resolve, reject) => {
      const qsMyClass =
        "select  c.id_courses, c.class_name, ct.category_name, c.description , cl.level_name, c.class_price, c.schedule, c.start_time, c.finish_time, c.image,  (SELECT COUNT(*)   FROM courses_student WHERE course = c.id_courses) AS student_count FROM courses c JOIN courses_category ct ON c.category_id = ct.category_id JOIN courses_level cl ON c.level_id = cl.level_id where id_fasilitator = ? ORDER BY c.id_courses";
        const paginate = "LIMIT ? OFFSET ?";
        const qsWithPaginate = qsMyClass.concat(" ", paginate);
        const limit = Number(query.limit) || 3;
        const page = Number(query.page) || 1;
        const offset = (page - 1) * limit;
        // console.log(limit, page, offset);
        db.query(qsWithPaginate, [id_user ,limit, offset], (err, result) => {
          if (err) return reject(err);
    
          const qsCount = 'SELECT COUNT(*) AS "count" FROM courses WHERE id_fasilitator = ?';
          // escaped character (\) => sehingga tanda yang digunakan sebagai syntax muncul sebagai string
          db.query(qsCount, [id_user], (err, data) => {
            if (err) return reject(err);
    
            const { count } = data[0];
            let finalResult = {
              result,
              count,
              page,
              limit,
            };
            resolve(finalResult);
          });
          // count page next prev
        });
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
      getAllCoursesPaginationModel,
      getMyClassModel,
      getMyClassFasilitatorModel,
      getStudentTotalScoreModel,
      filterCategoryModel,
      filterLevelModel,
      addCourseModel,
      addRegisterToCourseModel,
      addStudentScoreModel
  }