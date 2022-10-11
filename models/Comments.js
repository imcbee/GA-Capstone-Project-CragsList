const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//! ---------------------------Comments----------------------------
const commentsSchema = new Schema ({
    comments: {type: String},
    likes: {type: String},
    helpful: {type: Number},
    notHelpful: {type: Number},
    date: {type: Date, default: new Date().toLocaleDateString()},
    journal: {type: mongoose.Types.ObjectId, ref: 'Journal'},
    user: {type: mongoose.Types.ObjectId, ref: 'User'}


})

const Comments = mongoose.model('Comments', commentsSchema);


module.exports = Comments