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

const PokemonSchema = new mongoose.Schema({
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
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Pokemon = Connector.model("Pokemon", PokemonSchema);

module.exports.model = Pokemon;
