const mysql = require('mysql');

let connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

 connection = mysql.createConnection({
    host: "localhost",
    port: process.env.PORT || 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
  });
}

connection.connect(err => {
  if (err) {
    throw err;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;