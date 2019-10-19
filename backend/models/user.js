const mongoose = require("mongoose");
const Connector = require("../DBConnector");

const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    unique: true
  },
  pokemonId: [ObjectId],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const User = Connector.model("User", userSchema);

module.exports.model = User;
