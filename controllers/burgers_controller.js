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
    res.json(result);
  });
});

router.get("/api/active-burgers", (req, res) => {
  burger.selectActive((result) =>{
    res.json(result);
  });
});

router.get("/api/burgers/:id", (req, res) => {
  burger.selectAll((result) =>{
    const burgerSelect = result.filter( burger => parseInt(req.params.id)=== burger.id );
    res.send(burgerSelect);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.newBurger(req.body.name, () =>{});
  res.status(200).end();
});

router.put("/api/burgers/:id", (req, res) => {
  burger.eatBurger(parseInt(req.params.id), () => {});
  res.status(200).end();
});


module.exports = router;