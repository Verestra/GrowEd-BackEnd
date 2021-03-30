const db = require("../database/dbMySql");

let usernameValidate = (username) => {
    return new Promise((resolve, reject) => {
      const qsUsername = "SELECT `username` FROM `users` WHERE `username` = ?";
      db.query(qsUsername, [username], function (err, result) {
        if (err) return reject(err);
        if (result.length > 0) {
          return resolve(false);
        }
        return resolve(true);
      });
    });
  };

  let emailValidate = (email) => {
    return new Promise((resolve, reject) => {
      const qsEmail = "SELECT `email` FROM `users` WHERE `email` = ?";
      db.query(qsEmail, [email], function (err, result) {
        if (err) return reject(err);
        if (result.length > 0) {
          return resolve(false);
        }
        return resolve(true);
      });
    });
  };

let registerUser = (username, email, password) => {
    return new Promise((resolve, reject) => {
      const qsRegister =
        "INSERT INTO `users`(`username`, `email`, `password`, `role_id`) VALUES (?,?,?,'1')";
      db.query(
        qsRegister,
        [username, email, password],
        function (error, results) {
          if (error) return reject(error);
          return resolve(results);
        }
      );
    });
  }

  module.exports = { usernameValidate, emailValidate, registerUser };