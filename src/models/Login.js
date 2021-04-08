const db = require("../database/dbMySql");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Login = (userNameOrEmail, password) => {
  return new Promise((resolve, reject) => {
    const qsLogin = "SELECT `id_user`, `username`, `email`, `password`, `role_id` FROM `users` WHERE (`username` = ? or email = ?)"
    db.query(qsLogin, [userNameOrEmail, userNameOrEmail], function (err, result) {
      if (err) return reject(err);
      bcrypt.compare(password, result[0].password, (err, passwordMatch) => {
        if (err) reject(err);
        if (!passwordMatch) {
          return reject({message : err, status: 401});
        }
        const { username, role_id } = result[0];
        const payload = {
          username,
          role_id,
        };
        const options = {
          expiresIn: process.env.EXPIRE,
          issuer: process.env.ISSUER,
        };
        jwt.sign(payload, process.env.SECRET_KEY, options, (err, token) => {
          console.log(payload.role_id, payload.username)
          if (err) return reject({ msg: err, status: 500 });
          resolve(token);
        });
      });
      
    });
  });
};

module.exports = {
  Login
}