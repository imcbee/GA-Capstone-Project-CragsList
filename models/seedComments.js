const {Comments} = require("./")
const mongoose = require('mongoose')

function seedCommentsDb(){
    Comments.insertMany(
    [
        {
            comments: "Great job! Your form looks good and you make it look easy :)", 
            likes: 10,
            helpful: 10,
            notHelpful: 2,
            date: new Date().toLocaleDateString()
        },
        {
            comments: "Woww!! You are sooo good!", 
            likes: 15,
            helpful: 7,
            notHelpful: 3,
            date: new Date().toLocaleDateString()
        },
        {
            comments: "Woww!! You are sooo good!", 
            likes: 15,
            helpful: 7,
            notHelpful: 3,
            date: new Date().toLocaleDateString()
        },
        {
            comments: "I would of dyno-ed", 
            likes: 3,
            helpful: 2,
            notHelpful: 20,
            date: new Date().toLocaleDateString()
        },
    ])
}

seedCommentsDb()

module.exports = seedCommentsDb