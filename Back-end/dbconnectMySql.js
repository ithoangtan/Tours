const mysql = require("mysql");

//Ở đây ta nên dùng Promise thay vì
//  sync\await(ES7)(bản chất của thằng này -> Promise)
//  để tránh làm mất đi tính song song

class Database {
  constructor(config) {
    this.connection = mysql.createConnection(config);
  }
  query(sql, args) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
  }
  close() {
    return new Promise((resolve, reject) => {
      this.connection.end(err => {
        if (err) return reject(err);
        resolve();
      });
    });
  }
}

const config = {
  host: "localhost",
  user: "root",
  port: "3306",
  password: "123456",
  database: "kinhdoanhtourdulich"
};

const database = new Database(config);

module.exports = database;
