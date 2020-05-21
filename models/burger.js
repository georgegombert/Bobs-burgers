const orm = require('../config/orm');

let burger = {
  selectAll: (cb) => {
    orm.selectAll('burger', (res) =>{
      cb(res);
    });
  }, 
  insertOne: (burgerName, cb) => {
    orm.insertOne('burger', burgerName, (res) =>{
      cb(res);
    });
  }, 
  updateOne: (burgerId, eatStatus, cb) => {
    orm.updateOne('burger', burgerId, eatStatus, (res) =>{
      cb(res);
    });
  }
};

module.exports = burger;