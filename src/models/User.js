const db = require("../database/dbMySql");
const mysql = require("mysql");

let updateProfilePicModel = (image, id_user) => {
    return new Promise((resolve, reject) => {
      let qsUpdate =
        "UPDATE users SET profile_pic = ? WHERE id_user = ?";
      db.query(
        qsUpdate,
        [image, id_user],
        function (err, result) {
          if (err) return reject(err);
          return resolve(result);
        }
      );
    });
  };

  module.exports = {
      updateProfilePicModel
   }