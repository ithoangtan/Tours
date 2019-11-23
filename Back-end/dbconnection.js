var mysql = require("mysql");

const config = {
  host: "localhost",
  user: "root",
  port: "3306",
  password: "123456",
  database: "kinhdoanhtourdulich"
};

const connection = mysql.createConnection(config);

module.exports = connection;
