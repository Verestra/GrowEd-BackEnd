const db = require("../database/dbMySql");

const Login = (userNameOrEmail, password) => {
  return new Promise((resolve, reject) => {
    const qsLogin = "SELECT `id_user`, `username`, `email`, `password`, `role_id` FROM `users` WHERE (`username` = ? or email = ?) and `password` = ?"
    db.query(qsLogin, [userNameOrEmail, userNameOrEmail, password], function (err, result) {
      if (err) return reject(err);
      return (resolve(result), console.log(result));
    });
  });
};

module.exports = {
  Login
}