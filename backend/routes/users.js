const express = require("express");
const router = express.Router();
const sha256 = require("sha256");

const UserModel = require("../models/user").model;

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

/* GET users listing. */
router.post("/signup", async function(req, res, next) {
  const username = req.body.username;
  const password = sha256(req.body.password);
  const user = await UserModel.findOne({
    username: username
  });
  if (!user) {
    const newUser = new UserModel({ username, password });
    await newUser.save();
    res.status(201).send(newUser);
  } else {
    res.status(400).send("username exists!");
  }
});

module.exports = router;
