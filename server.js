//! ---------------------------Dependencies---------------------------
const express = require("express");
const app = express();
require("dotenv").config();
const {PORT, MONGODB_URI} = process.env;
require('./config/db.connection')
const mongoose = require('mongoose')
const {journalController, commentsController, userController} = require("./controllers/index")
const { Journal } = require('./models')
const cors = require('cors');
const morgan = require('morgan');
// const {seedJournalsDb, seedCommentsDb, seedUserDb} = require('./models/seedData')

//! ---------------------------Middleware----------------------------
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use("/journal", journalController);
app.use("/comments", commentsController);
app.use("/user", userController);


//! ---------------------------HOME ROUTE----------------------------
app.get('/', async (req, res) => {
    try{
        const response = await Journal.find()
        res.send(response)
    }catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
})

//! ---------------------------404 ROUTE----------------------------
app.get("*", (req, res) => {
    res.send('404')
})


//! ---------------------------LISTENER---------------------------- 
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} 👍 👍 👍`)
})
