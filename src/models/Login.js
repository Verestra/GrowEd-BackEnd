const db = require("../database/dbMySql");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Login = (userNameOrEmail, password) => {
  return new Promise((resolve, reject) => {
    const qsLogin = "SELECT `id_user`, `username`, `email`, `password`, `role_id`, `profile_pic`  FROM `users` WHERE (`username` = ? or email = ?)"
    db.query(qsLogin, [userNameOrEmail, userNameOrEmail], function (err, result) {
      if (err) return reject(err);
      if (result.length === 0) {
          return reject({message : "username or email false", status : 402})
        }
      console.log(result)
      bcrypt.compare(password, result[0].password, (err, passwordMatch) => {
        if (err) reject(err);
        if (!passwordMatch) {
          return reject({message : "Wrong Password", status: 401});
        }
        
        const { id_user, username, role_id, profile_pic } = result[0];
        const payload = {
          id_user,
          username,
          role_id,
          profile_pic
        };
        const options = {
          expiresIn: process.env.EXPIRE,
          issuer: process.env.ISSUER,
        };
        jwt.sign(payload, process.env.SECRET_KEY, options, (err, token) => {
          console.log(payload.id_user, payload.role_id, payload.username)
          if (err) return reject({ msg: err, status: 500 });
          const result = {
            token : token,
            id_user : payload.id_user,
            role_id : payload.role_id,
            username : payload.username,
            picture : payload.profile_pic
          }
          resolve(result);
        });
      });
      
    });
  });
};

module.exports = {
  Login
}