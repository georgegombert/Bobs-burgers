const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get("/", (req, res) => {
  burger.selectAll((result) =>{
    const resObj = {
      burgers: result
    }
    res.render("index", resObj);
  });
});

router.get("/api/burgers", (req, res) => {
  burger.selectAll((result) =>{
    res.send(result);
  });
});

router.get("/api/burgers/:id", (req, res) => {
  burger.selectAll((result) =>{
    const burgerSelect = result.filter( burger => parseInt(req.params.id)=== burger.id );
    res.send(burgerSelect);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.newBurger(req.body.name, result =>{
    console.log("success");
  });
  res.status(200).end();
});

router.put("/api/burgers/:id", (req, res) => {
  burger.eatBurger(parseInt(req.params.id), () => {
    console.log("success");
  })
  res.status(200).end();
});


module.exports = router;