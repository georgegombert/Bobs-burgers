const connection = require('./connection');

let orm = {
  selectAll: (table, cb) => {
    connection.query("SELECT * FROM ??", [table], (err, result) =>{
      if (err) throw err;
      cb(result);
    });
  },
  selectActive: (table, cb) => {
    connection.query("SELECT * FROM ?? WHERE devoured = 0", [table], (err, result) =>{
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: (table, colName, burgerName, cb) => {
    connection.query("INSERT INTO ?? (??) VALUES (?);", [table, colName, burgerName], (err, result) =>{
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: (table, burgerId, eatStatus, cb) => {
    connection.query("UPDATE ?? SET devoured = ? WHERE id = ? ", [table, eatStatus, burgerId], (err, result) =>{
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;