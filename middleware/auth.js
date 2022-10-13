//! ---------------------Importing Statments---------------------------
const passport = require("passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//! ---------------------Importing Auth Models--------------------------
const { Strategy, ExtractJwt } = require("passport-jwt");

const { User } = require("../models");

//! ---------------------Configuration-----------------------------------
const secret = process.env.JWT_SECRET || "ilovecodingya";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret,
};

//! ---------------------Auth Functionality-----------------------------------
const verify = async (jwt_payload, done) => {
  try {
    const user = await User.findById(jwt_payload.id);
    return done(null, user);
  } catch (error) {
    return done(error);
  }
};

const strategy = new Strategy(opts, verify);

passport.use(strategy);

passport.initialize();

const requireToken = passport.authenticate("jwt", { session: false });

//! ---------------------createUserToken-----------------------------------
const createUserToken = (req, user) => {
  if (
    !user ||
    !req.body.password ||
    !bcrypt.compareSync(req.body.password, user.password)
  ) {
    const error = new Error("The provided username or password is incorrect");
    error.statusCode = 422;
    throw error;
  }
  return jwt.sign({ id: user._id }, secret, { expiresIn: 36000 });
};

//! ---------------------handleValidateOwnership-----------------------------------
const handleValidateOwnership = (req, document) => {
  const ownerId = document.owner._id || document.owner;

  if (!req.user._id.equals(ownerId)) {
    throw Error("Unauthorized Access");
  } else {
    return document;
  }
};

module.exports = {
  requireToken,
  createUserToken,
  handleValidateOwnership,
};

// console.log(Strategy)
// console.log(ExtractJwt)
