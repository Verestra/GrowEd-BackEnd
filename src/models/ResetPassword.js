let db = require("../database/dbMySql");
const bcrypt = require('bcrypt');


let emailCheck = (email) => {
    return new Promise((resolve, reject) => {
      let qsEmail = "SELECT `email` FROM `users` WHERE `email` = ?";
      db.query(qsEmail, [email], function (err, result) {
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
    const qsChange = "UPDATE `users` SET `password`= ? WHERE `email` = ?";
    bcrypt.hash(newPassword, 10, (err, encryptPass) => {
      if (err) return reject(err);
      let encryptedPass = (newPassword = encryptPass)
      db.query(
        qsChange,
        [encryptedPass, email],
        function (error, results) {
          if (error) return reject(error);
          return resolve(results);
        }
      );
    })
  });
};

module.exports = {
    emailCheck,
    passwordChange
};
