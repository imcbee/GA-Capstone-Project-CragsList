//! ---------------------Importing Statments-----------------------
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
require("dotenv").config();
const { saltRounds } = process.env;

//! ------------------------Importing Models-------------------------
const { User, Journal } = require("../models");
const { createUserToken, requireToken } = require("../middleware/auth");

//! ------------------------Auth Register Route-----------------------
router.post("/register", async (req, res, next) => {
  try {
    console.log(saltRounds);
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(req.body.password, salt);
    const pwStore = req.body.password;
    req.body.password = passwordHash;
    console.log("Req: ", req.body);
    const newUser = await User.create(req.body);
    console.log("Testing: ", newUser);
    // what happens if null is return
    // mongoose - virtuals -> remove password from returned JSON
    if (newUser) {
      req.body.password = pwStore;
      const authenticatedUserToken = createUserToken(req, newUser);
      res.status(201).json({
        user: newUser,
        isLoggedIn: true,
        token: authenticatedUserToken,
      });
    } else {
      res.status(400).json({ error: "Something went wrong" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
});

//! ------------------------Auth Login Route--------------------------
router.post("/login", async (req, res, next) => {
  try {
    const loggingUser = req.body.username;
    //! make sure that front-end is turned into JSON first
    const foundUser = await User.findOne({ username: loggingUser });
    const token = await createUserToken(req, foundUser);
    // console.log("created token:", token);
    res.status(200).json({ user: foundUser, isLoggedIn: true, token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

//! ------------------------Auth Logout Route--------------------------
router.get("/logout", requireToken, (req, res, next) => {
  try {
    const currentUser = req.user.username;
    console.log(currentUser);
    delete req.user;
    res.status(200).json({
      message: `${currentUser} currently logged out`,
      isLoggedIn: false,
      token: "",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

//! ------------------------User Index Route--------------------------
router.get("/index", requireToken, async (req, res, next) => {
  try {
    // console.log(req.user._id)
    const userJournals = await Journal.find({ user: req.user._id });
    console.log(userJournals);
    res.status(200).json(userJournals);
  } catch (error) {
    console.log(error);
    res.redirect("/404");
    res.status(400).json(error);
  }
});

module.exports = router;
