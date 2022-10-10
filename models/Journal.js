const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//! ---------------------------Journal----------------------------
const journalSchema = new Schema ({
    name: {type: String, required: true},
    location: {type: String},
    difficulty: {type: String, required: true},
    tips: {type: String},
    description: {type: String, required: true},
    picture: {type: String}, // pictures hosted on imgur
    likes: {type: Number},
    date: {type: Date, default: new Date().toLocaleDateString()},
    // user: {type: mongoose.Types.ObjectId, required: true, ref: 'User'}
})

const Journal = mongoose.model('Journal', journalSchema);

module.export = Journal