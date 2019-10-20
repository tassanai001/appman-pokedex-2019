const express = require("express");
const router = express.Router();
const sha256 = require("sha256");

const requireJWTAuth = require("../middleware").requireJWTAuth;
const UserModel = require("../models/user").model;
const PokemonsModel = require("../models/pokemon").model;

const pokedexesManager = async (req, result) => {
  const index = result.pokemonId.indexOf(req.body.pokemonId);
  if (index === -1) {
    result.pokemonId.push(req.body.pokemonId);
    result.updatedAt = new Date();
    return result;
  }
  result.updatedAt = new Date();
  return result;
};

router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/signup", async function(req, res, next) {
  const username = req.body.username;
  const password = sha256(req.body.password);
  const user = await UserModel.findOne({
    username: username
  });
  if (!user) {
    const newUser = new UserModel({ username, password });
    await newUser.save();
    res.status(201).send("create new user done !");
  } else {
    res.status(400).send("username exists!");
  }
});

router.post("/addpokemon", requireJWTAuth, async function(req, res) {
  if (req.user && req.body.pokemonId) {
    const pokemonId = req.body.pokemonId;
    const findUser = await UserModel.findOne({ _id: req.user });
    const existsPokemonId = await PokemonsModel.findOne({ _id: pokemonId });

    if (!existsPokemonId) res.status(404).send("PokemonId Not Found !");

    if (!findUser) {
      const params = { userId: req.user, pokemonId: [req.body.pokemonId] };
      params.updatedAt = new Date();
      const assignPokemonResult = await new UserModel(params).save();
      res.status(200).send(assignPokemonResult);
    } else {
      const newPokedexParam = await pokedexesManager(req, findUser);
      const assignPokemonResult = await new UserModel(newPokedexParam).save();
      res.status(200).send(assignPokemonResult);
    }
  } else {
    res.status(400).send("pokemonId Incorrect !");
  }
});

router.get("/pokedexbyuserid/:userid", requireJWTAuth, async function(
  req,
  res
) {
  if (req.params.userid) {
    const results = await UserModel.findOne({
      _id: req.params.userid
    });
    if (!results) {
      res.status(404).send("User Not Found!");
    } else {
      const pokemonLists = await PokemonsModel.find({
        _id: { $in: [results.pokemonId] }
      });
      res.status(200).send({ pokemonLists: pokemonLists });
    }
  } else {
    res.status(404).send("Not Found!");
  }
});

router.post("/pokedexlists", requireJWTAuth, async function(req, res) {
  const pokeDexesResults = await UserModel.find().select("username _id");
  console.log("results:--> ", pokeDexesResults);
  if (pokeDexesResults.length > 0) {
    res.status(200).send(pokeDexesResults);
  } else {
    res.status(200).send([]);
  }
});

module.exports = router;
