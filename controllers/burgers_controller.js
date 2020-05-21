const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get("/", (req, res) => {
  burger.selectAll((result) =>{
    res.send(result);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.newBurger('static new burger', (result) =>{
    res.send(JSON.stringify(result));
  });
});




module.exports = router;