const mongoose = require("mongoose");
const Connector = require("../DBConnector");

const attacksModel = new mongoose.Schema({
  cost: {
    type: [String]
  },
  name: {
    type: String
  },
  text: {
    type: String
  },
  damage: {
    type: String
  },
  convertedEnergyCost: {
    type: Number
  }
});

const weaknessesModel = new mongoose.Schema({
  type: {
    type: "String"
  },
  value: {
    type: "String"
  }
});

const pokedexSchema = new mongoose.Schema({
  name: {
    type: String
  },
  nationalPokedexNumber: {
    type: Number
  },
  imageUrl: {
    type: String
  },
  imageUrlHiRes: {
    type: String
  },
  supertype: {
    type: String
  },
  subtype: {
    type: String
  },
  ability: {
    name: {
      type: String
    },
    text: {
      type: String
    },
    type: {
      type: String
    }
  },
  hp: {
    type: String
  },
  retreatCost: {
    type: [String]
  },
  convertedRetreatCost: {
    type: Number
  },
  number: {
    type: String
  },
  artist: {
    type: String
  },
  rarity: {
    type: String
  },
  series: {
    type: String
  },
  set: {
    type: String
  },
  setCode: {
    type: String
  },
  text: {
    type: [String]
  },
  attacks: {
    type: [attacksModel]
  },
  weaknesses: {
    type: [weaknessesModel]
  },
  type: {
    type: String
  },
  create_date: { type: Date, default: Date.now },
  update_date: { type: Date, default: Date.now }
});

const Pokedexs = Connector.model("Pokedexs", pokedexSchema);

module.exports.model = Pokedexs;
