//! ---------------------Importing Statments-----------------------
const express = require('express');
const router = express.Router();

//! ------------------------Importing Models------------------------
const { Comments, Journal } = require("../models")

//! --------------------------Middleware-----------------------------

//! --------------------------New Route-------------------------------
//! --------------------------Create Route----------------------------
router.post('/:id', async(req, res, next) => {
    try{
        const newComment = await Comments.create(req.body)
        res.redirect
    }catch(error){
        console.log(err);
        res.redirect('/404')
        res.status(400).json(error);
    }
})

//! --------------------------Show Route------------------------------
router.get('/:id', async (req, res, next) => {
    try{
        const showComment = await Comments.findById(req.params.id)
        const journal = await Journal.findById(req.params.id)
    }catch(error){
        console.log(err);
        res.redirect('/404')
        res.status(400).json(error);
    }
})

//! --------------------------Index Route-----------------------------
//! --------------------------Destroy Route---------------------------
router.delete('')
//! --------------------------Edit Route------------------------------
//! --------------------------Update Route----------------------------


module.exports = router;