// init mysql
const mysql = require('mysql');
const config = {
    host: "localhost",
    user     : "root",
    password : "",
    database: "db_growed"
};
// init connection

const db = mysql.createConnection(config);


module.exports = db;