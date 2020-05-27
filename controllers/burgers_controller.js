const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get("/", (req, res) => {
  burger.selectAll((result) =>{
    const resObj = {
      burgers: result
    }
    console.log(resObj);
    console.log(result);
    res.render("index", resObj);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.newBurger("test post burger", result =>{
    console.log(result);
  });
  res.status(200).end();
});




module.exports = router;