let db = require("../database/dbMySql");

let emailCheck = (email) => {
    return new Promise((resolve, reject) => {
      let emailquery = "SELECT `email` FROM `users` WHERE `email` = ?";
      db.query(emailquery, [email], function (err, result) {
        if (err) return reject(err);
        if (result.length === 0) {
          return resolve(false);
        }
        return resolve(result);
      });
    });
  };

let passwordChange = (newPassword, email) => {
  return new Promise((resolve, reject) => {
    const qs = "UPDATE `users` SET `password`= ? WHERE `email` = ?";
    db.query(qs, [newPassword, email], function (err, result) {
      if (err) return reject(err);
      return resolve(result);
    });
  });
};

module.exports = {
    emailCheck,
    passwordChange
};
