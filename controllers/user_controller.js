//! ---------------------Importing Statments-----------------------
const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt')

//! ------------------------Importing Models-------------------------
const {User} = require('../models')
const {createUserToken , requireUserToken} = require('../middleware/auth')


//! ------------------------Auth Register Route-----------------------
router.post("/register", async (req, res, next) => {
    try{
        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(req.body.password, salt)
        req.body.password = passwordHash
        console.log("Req: ", req.body)
        const newUser = await User.create(req.body)
        console.log("Testing: ", newUser)
        // what happens if null is return 
        // mongoose - virtuals -> remove password from returned JSON
        res.status(200).json({currentUser: newUser, isLoggedIn: true, })
      }catch(error){
        console.log(error)
        res.status(400).json({error: error})
      }
});

//! ------------------------Auth Login Route-------------------------- need work
router.post("/login", async (req, res, next) => {
    try{
        const loggingUser = req.body.username
        const foundUser = await User.findOne({username: loggingUser})
        const token = await createUserToken(req, foundUser)
        console.log("created token:", token)
        res.status(200).json({user: foundUser, isLoggedIn: true, token})
        } catch(error) {
        res.status(400).json({error: error.message})
      }
});


module.exports = router;