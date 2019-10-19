const express = require("express");
const router = express.Router();
const jwt = require("jwt-simple");
const sha256 = require("sha256");

const UserModel = require("../models/user").model;
const middleWare = require("../middleware");

router.get("/", middleWare.requireJWTAuth, function(req, res, next) {
  res.send("ยอดเงินคงเหลือ 50");
});

router.post("/login", middleWare.loginMiddleware, async (req, res) => {
  if (req.body.username && req.body.password) {
    const user = await getUser(req);
    const payload = {
      uid: user._id,
      iat: new Date().getTime()
    };
    res.send(jwt.encode(payload, "MY_SECRET_KEY"));
  } else {
    res.send(jwt.encode(payload, "MY_SECRET_KEY"));
  }
});

const getUser = async req => {
  const user = await UserModel.findOne({
    username: req.body.username,
    password: sha256(req.body.password)
  });
  return user;
};

module.exports = router;
