const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//! ---------------------------Journal----------------------------
const journalSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String },
  difficulty: { type: String, required: true },
  tips: { type: String },
  description: { type: String, required: true },
  picture: { type: String },
  likes: { type: Number },
  date: { type: Date, default: new Date().toLocaleDateString() },
  user: { type: mongoose.Types.ObjectId, ref: "User" },
  comments: [{ type: mongoose.Types.ObjectId, ref: "Comments" }],
});

const Journal = mongoose.model("Journal", journalSchema);

module.exports = Journal;
