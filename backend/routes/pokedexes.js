const express = require("express");
const router = express.Router();
const jwt = require("jwt-simple");
const middleWare = require("../middleware");

router.get("/", middleWare.requireJWTAuth, function(req, res, next) {
  res.send("ยอดเงินคงเหลือ 50");
});

router.post("/login", middleWare.loginMiddleware, (req, res) => {
  const payload = {
    sub: req.body.username,
    iat: new Date().getTime()
  };
  res.send(jwt.encode(payload, "MY_SECRET_KEY"));
});

module.exports = router;
