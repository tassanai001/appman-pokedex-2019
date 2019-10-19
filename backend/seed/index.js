const PokemonModel = require("../models/pokemon").model;
const data = require("./pokedexes.json");

const migratePokedexs = () => {
  data.cards.map(async val => {
    const existsPoke = await PokemonModel.findOne({
      name: val.name,
      type: val.type
    });
    if (!existsPoke) {
      const newPoke = new PokemonModel(val);
      await newPoke.save();
    }
  });
  console.log("Migrate Pokemon done!");
};

module.exports.seed = migratePokedexs;
