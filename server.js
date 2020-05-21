const express = require('express');
const hbrs = require('express-handlebars');
const mysql = require('mysql');
// const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(path.join(__dirname, '/public')));

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db"
});

connection.connect(function (err) {
  if (err) {
    throw err;
  }
  console.log("connected as id " + connection.threadId);
});

app.get('/', (req, res) => {
  res.send("working");
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));