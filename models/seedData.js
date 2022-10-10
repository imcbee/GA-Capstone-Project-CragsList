const mongoose = require('mongoose')
// const db = require('./Journal')
require('../config/db.connection')
const  {Journal}  = require('./')

const array = [{
    name: "Lonely Yellow",
    location: "Earth Treks Crystal City",
    difficulty: "v5",
    description: "This problem really tested my crimp strength at the beginning of the route.  In the middle of the route, the crux was a pinch and cut feet to reach at the.  Top out was easy.  Overall, a great v5 and definitely pushed my skills!",
    tips: "use heel-hook on 2nd move, cut feet on crux, trust the pinch",
    picture: "https://i.imgur.com/XkWfxzQ.jpg",
    likes: 5,
    date: new Date().toLocaleDateString()
},
{
    name: "Pink Unicorns",
    location: "Earth Treks Rockville, MD",
    difficulty: "v9",
    description: "Broooooo just dyno it",
    tips: "campus board all day, everyday",
    picture: "https://i.imgur.com/JXFJHUU.jpeg",
    likes: 20,
    date: new Date().toLocaleDateString()
},
{
    name: "Papa Murphy's Divorce",
    location: "Macho Boulder Gym",
    difficulty: "v3",
    description: "these holds hurt my hands!!! Not a fun climb",
    tips: "skip this one",
    picture: "https://i.imgur.com/xc0LsMR.png",
    likes: 2,
    date: new Date().toLocaleDateString()
},
{
    name: "The Coom Zone",
    location: "My Hom Gym",
    difficulty: "v6",
    description: "just built this one in basement.  The bee's knees",
    tips: "skip this one",
    picture: "https://i.imgur.com/KyiIgMF.jpeg",
    likes: 2,
    date: new Date().toLocaleDateString()
},
]

function seedJournalsDb(){
    Journal.insertMany(array)
};


seedJournalsDb()

