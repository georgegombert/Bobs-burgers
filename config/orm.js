const connection = require('./connection');

let orm = {
  selectAll: (table) => {
    connection.query("SELECT * FROM ??", [table], (err, result) =>{
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: (table,burgerName) => {
    connection.query("INSERT INTO ?? VALUES ??", [table, burgerName], (err, result) =>{
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: (table, burgerId, eatStatus) => {
    connection.query("UPDATE ?? SET devoured = ? WHERE id = ? ", [table, burgerId, eatStatus], (err, result) =>{
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;