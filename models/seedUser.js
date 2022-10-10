const db = require("./User")
const mongoose = require('mongoose')

function seedUserDb() {
    db.User.insertMany(
        [
            {
                username: "ianmcbee",
                password: "1234",
                email: "i@m.com",
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
            },
            {
                username: "timrathert",
                password: "1234",
                email: "t@r.com",
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
            },
            {
                username: "ptart",
                password: "1234",
                email: "p@t.com",
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
            },
        ]
    )
};
seedUserDb()

module.exports = seedUserDb