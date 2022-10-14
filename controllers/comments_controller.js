//! ---------------------Importing Statments-----------------------
const express = require("express");
const router = express.Router();

//! ------------------------Importing Models------------------------
const { Comments, Journal, User } = require("../models");

//! --------------------------Middleware-----------------------------

//! --------------------------New Route-----------------------------
router.get("/new", async (req, res, next) => {
  try {
    res.status(201).send("new route");
  } catch (error) {
    console.log(error);
    res.redirect("/404");
    res.status(400).json(error);
  }
});

//! --------------------------Create Route----------------------------
router.post("/new", async (req, res, next) => {
  try {
    // create comment with comment id
    // take comment id and add to jounral's comments
    const newComment = await Comments.create(req.body);
    const journal = await Journal.findById(req.body.journal);
    journal.comments.push(newComment._id);
    // const likes = await Journal.findById(req.body.likes);
    // likes += 1;
    // likes.save();
    journal.save();
    //where to push?
    // journal.comments.push()

    res.status(200).send("Successful!");
    // res.redirect(`/journal/${req.params.id}`)
  } catch (error) {
    console.log(error);
    res.redirect("/404");
    res.status(400).json(error);
  }
});

//! --------------------------Show Route------------------------------
router.get("/:id", async (req, res, next) => {
  try {
    const showComment = await Comments.findById(req.params.id);

    res.status(201).json(showComment);
  } catch (error) {
    console.log(error);
    res.redirect("/404");
    res.status(400).json(error);
  }
});

//! --------------------------Destroy Route---------------------------
router.delete("/:id", async (req, res, next) => {
  try {
    const deleteComment = await Comments.findByIdAndDelete(req.params.id);
    res.status(201).json(deleteComment);
  } catch (error) {
    console.log(error);
    res.redirect("/404");
    res.status(400).json(error);
  }
});

//! --------------------------Edit Route------------------------------
router.get("/:id/edit", async (req, res, next) => {
  try {
    const editComment = await Comments.findById(req.params.id);
  } catch (error) {
    console.log(error);
    res.redirect("/404");
    res.status(400).json(error);
  }
});

//! --------------------------Update Route----------------------------
router.put("/:id", async (req, res, next) => {
  try {
    const updatedComment = req.body;
    await Comments.findByIdAndUpdate(req.params.id, updatedComment, {
      new: true,
    });
  } catch (error) {
    console.log(err);
    res.redirect("/404");
    res.status(400).json(error);
  }
});

module.exports = router;
