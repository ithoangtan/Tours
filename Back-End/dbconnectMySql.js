const mysql = require("mysql");

//Ở đây ta nên dùng Promise thay vì
//  sync\await(ES7)(bản chất của thằng này -> Promise)
//  chúng ta có thể sử dụng nó cho dự án tiếp theo(cần một lời khuyên từ dev back-end nào đó)

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
      this.connection.end((err) => {
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
  database: "azmszdk4w6h5j1o6",
};

const configHerokuTest = {
  host: "l3855uft9zao23e2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "vke6ut5wnkjh7y47",
  port: "3306",
  password: "x18ifcnupo42ey8j",
  database: "azmszdk4w6h5j1o6",
};

const configProduction = {
  host: process.env.JAWSDB_HOST,
  user: process.env.JAWSDB_USERNAME,
  port: process.env.JAWSDB_PORT,
  password: process.env.JAWSDB_PASSWORD,
  database: process.env.JAWSDB_DATABASE,
};

const database =
  process.env.NODE_ENV === "production"
    ? new Database(configProduction)
    : new Database(configHerokuTest);

module.exports = database;
