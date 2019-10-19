const express = require("express");
const router = express.Router();

const middleWare = require("../middleware");
const Pokemons = require("../models/pokemon").model;

const searchPokeDexByName = async name => {
  const query = `.*${name}.*`;
  const result = await Pokemons.find({ name: { $regex: query } });
  return result;
};

const searchPokeDexByType = async type => {
  const query = `.*${type}.*`;
  const result = await Pokemons.find({ type: { $regex: query } });
  return result;
};

router.get("/", middleWare.requireJWTAuth, function(req, res, next) {
  res.status(200).send("ยอดเงินคงเหลือ 50");
});

router.get("/lists", middleWare.requireJWTAuth, async (req, res) => {
  const result = await Pokemons.find().limit(10);
  res.status(200).send(result);
});

router.get("/search/:query", middleWare.requireJWTAuth, async (req, res) => {
  if (req.params.query) {
    const lowerCase = req.params.query.toLowerCase();
    const name = await searchPokeDexByName(lowerCase);
    const type = await searchPokeDexByType(lowerCase);
    res.status(200).send([].concat(name, type));
  } else {
    res.status(200).send([]);
  }
});

module.exports = router;
