// init mysql
const mysql = require('mysql2');
// const = process.env
const config = {
    host: process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
};
// init connection

const db = mysql.createConnection(config);


module.exports = db;