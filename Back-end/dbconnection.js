var mysql = require("mysql");

//Tạm thời sẽ dùng callback cho các controller image, schedule, tour
//Các controller khác ta sẽ dùng mysql with Promise code trong file dbconnectMySql.js

const config = {
  host: "localhost",
  user: "root",
  port: "3306",
  password: "123456",
  database: "kinhdoanhtourdulich"
};

const connection = mysql.createConnection(config);

module.exports = connection;
