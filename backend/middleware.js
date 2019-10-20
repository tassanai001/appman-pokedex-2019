const ExtractJwt = require("passport-jwt").ExtractJwt;
const JwtStrategy = require("passport-jwt").Strategy;
const passport = require("passport");
const sha256 = require("sha256");

const UserModel = require("./models/user").model;

const SECRET = "MY_SECRET_KEY";

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: SECRET
};

const jwtAuth = new JwtStrategy(jwtOptions, async (payload, done) => {
  const user = await findByUsername(payload);
  if (user) done(null, user._id);
  else done(null, false);
});

passport.use(jwtAuth);

const requireJWTAuth = passport.authenticate("jwt", { session: false });

const loginMiddleware = async (req, res, next) => {
  const user = await existingUser(req);
  if (user) next();
  else res.status(401).send("Wrong username and password");
};

const findByUsername = async payload => {
  const user = await UserModel.findOne({
    _id: payload.uid
  });
  return user;
};

const existingUser = async req => {
  const user = await UserModel.findOne({
    username: req.body.username,
    password: sha256(req.body.password)
  });
  return user;
};

module.exports.requireJWTAuth = requireJWTAuth;
module.exports.loginMiddleware = loginMiddleware;
