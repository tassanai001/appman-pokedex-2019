const mongoose = require("mongoose");
const Connector = require("../DBConnector");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    unique: true
  },
  create_date: { type: Date, default: Date.now },
  update_date: { type: Date, default: Date.now },
});


const User = Connector.model("User", userSchema);

module.exports.model = User;
