const {User, Journal, Comments}= require("./")
const bcrypt = require('bcrypt')
require('../config/db.connection')
require('dotenv').config()
const {saltRounds} = process.env

async function clearDB() {
    await User.deleteMany();
    console.log("test 1")
    await Journal.deleteMany();
    console.log("test 2")
    await Comments.deleteMany();
    console.log("test 3")
}
const testUsers =[
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

async function seedUserDb(array) {
    for(let i=0; i<array.length; i++) {
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(array[i].password, salt);
        array[i].password = passwordHash;
    }
    console.log(array)
    User.insertMany(array)
};

function seedDataBaseMaster() {
    clearDB()
    seedUserDb(testUsers)
}

seedDataBaseMaster()

module.exports = seedUserDb