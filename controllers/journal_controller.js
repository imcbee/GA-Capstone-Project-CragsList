//! ---------------------Importing Statments-----------------------
const express = require("express");
const router = express.Router();

//! --------------------------Middleware----------------------------

//! ---------------------Importing Models-----------------------
const { Journal, Comments } = require("../models");
const { handleValidateOwnership, requireToken } = require("../middleware/auth");

//! --------------------------New Route-------------------------------
router.get("/new", async (req, res, next) => {
  try {
    res.status(201).send("journal creation view");
  } catch (error) {
    console.log(error);
    res.redirect("/404");
    res.status(400).json(error);
  }
});

//! --------------------------Create Route----------------------------
router.post("/new", requireToken, async (req, res, next) => {
  try {
    console.log(req.body);
    const createJournal = await Journal.create(req.body);
    res.status(201).send("Successful!");
  } catch (error) {
    console.log(error);
    res.redirect("/404");
    res.status(400).json(error);
  }
});

//! --------------------------Show Route------------------------------
router.get("/:id", async (req, res, next) => {
  try {
    const findJournal = await Journal.findById(req.params.id);
    res.status(201).json(findJournal);
  } catch (error) {
    console.log(error);
    res.redirect("/404");
    res.status(400).json(error);
  }
});

//! --------------------------Index Route-----------------------------
router.get("/", async (req, res, next) => {
  try {
    const allJournal = await Journal.find();
    res.status(201).json(allJournal);
  } catch (error) {
    console.log(error);
    res.redirect("/404");
    res.status(400).json(error);
  }
});

//! --------------------------Destroy Route---------------------------
router.delete("/:id", requireToken, async (req, res, next) => {
  try {
    handleValidateOwnership(req, await Journal.findById(req.params.id));
    const deleteJournal = await Journal.findByIdAndDelete(req.params.id);
    res.status(201).json(deleteJournal);
  } catch (error) {
    console.log(error);
    res.redirect("/404");
    res.status(400).json(error);
  }
});

//! --------------------------Edit Route------------------------------
router.get("/:id/edit", async (req, res, next) => {
  try {
    const editJournal = await Journal.findById(req.params.id);
    res.status(201).send("edit route");
  } catch (error) {
    console.log(error);
    res.redirect("/404");
    res.status(400).json(error);
  }
});

//! --------------------------Update Route----------------------------
router.put("/:id", requireToken, async (req, res, next) => {
  try {
    const updatedJournal = req.body;
    handleValidateOwnership(req, await Journal.findById(req.params.id));
    res.status(201).json(
      await Journal.findByIdAndUpdate(req.params.id, updatedJournal, {
        new: true,
      })
    );
  } catch (error) {
    console.log(error);
    res.redirect("/404");
    res.status(400).json(error);
  }
});

module.exports = router;
