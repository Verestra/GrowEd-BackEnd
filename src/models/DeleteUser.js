const db = require("../database/dbMySql");

let deleteUserModel = (idUser) => {
    return new Promise((resolve, reject) => {
      let qsDeleteUser = "DELETE FROM `users` WHERE `users`.`id_user` = ?";
      db.query(qsDeleteUser, [idUser], function (err, result) {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  };
module.exports = {
    deleteUserModel
};