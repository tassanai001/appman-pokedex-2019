const PokemonModel = require("../models/pokemon").model;
const data = require("./pokemon.json");

const migratePokedexs = () => {
  data.cards.map(async val => {
    const existsPoke = await PokemonModel.findOne({
      name: val.name.toLowerCase(),
      type: val.type.toLowerCase()
    });
    if (!existsPoke) {
      val.name = val.name.toLowerCase();
      val.type = val.type.toLowerCase();
      const newPoke = new PokemonModel(val);
      await newPoke.save();
    }
  });
  console.log("Migrate Pokemon done!");
};

module.exports.seed = migratePokedexs;
