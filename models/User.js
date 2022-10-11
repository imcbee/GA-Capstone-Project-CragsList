const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//! ---------------------------Users------------------------------
const userSchema = new Schema ({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    avatar: {type: String, default: "https://www.w3schools.com/howto/img_avatar.png",},
    journal: [{type: mongoose.Types.ObjectId, ref: 'Journal'}],
    comments: [{type: mongoose.Types.ObjectId, ref: 'Comments'}]

}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: (_doc, ret) => {
            delete ret.password
            return ret
        }
    }
})

const User = mongoose.model('User', userSchema);


module.exports = User