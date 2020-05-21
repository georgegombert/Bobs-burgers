const connection = require('./connection');

let orm = {
  selectAll: (table, cb) => {
    connection.query("SELECT * FROM ??", [table], (err, result) =>{
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: (table,burgerName, cb) => {
    connection.query("INSERT INTO ?? VALUES ??", [table, burgerName], (err, result) =>{
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: (table, burgerId, eatStatus, cb) => {
    connection.query("UPDATE ?? SET devoured = ? WHERE id = ? ", [table, burgerId, eatStatus], (err, result) =>{
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;