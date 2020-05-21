const orm = require('../config/orm');

let burger = {
  selectAll: (cb) => {
    orm.selectAll('burgers', (res) =>{
      cb(res);
    });
  }, 
  newBurger: (burgerName, cb) => {
    orm.insertOne('burgers', 'burger_name', burgerName, (res) =>{
      cb(res);
    });
  }, 
  eatBurger: (burgerId, cb) => {
    orm.updateOne('burgers', burgerId, 1, (res) =>{
      cb(res);
    });
  }
};

module.exports = burger;