//import
let db = require("../database/dbMySql");

let Login = (userNameOrEmail, password) => {
  return new Promise((resolve, reject) => {
    let dbquery =
    "SELECT `id_user`, `username`, `email`, `password`, `role_id` FROM `users` WHERE (`username` = ? or email = ?) and `password` = ?"
    db.query(dbquery, [userNameOrEmail, userNameOrEmail, password], function (err, result){
      if (err) return reject(err);
      return (resolve(result),console.log(result));
    });
  });
};

module.exports = {
    Login
}