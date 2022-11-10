const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  port: process.env.DB_PORT,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

module.exports = connection;
