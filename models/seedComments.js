const { Comments } = require("./");
const mongoose = require("mongoose");

async function seedCommentsDb() {
  await Comments.deleteMany();
  Comments.insertMany([
    {
      comments: "Great job! Your form looks good and you make it look easy :)",
      likes: 10,
      helpful: 10,
      notHelpful: 2,
      date: new Date().toLocaleDateString(),
      journal: "6345a0e2c27b76c356ab8cd1",
      user: "6345a070b1c34e65fbe299cc",
    },
    {
      comments: "Woww!! You are sooo good!",
      likes: 15,
      helpful: 7,
      notHelpful: 3,
      date: new Date().toLocaleDateString(),
      journal: "6345a0e2c27b76c356ab8cd1",
      user: "6345a070b1c34e65fbe299cc",
    },
    {
      comments: "Woww!! You are sooo good!",
      likes: 15,
      helpful: 7,
      notHelpful: 3,
      date: new Date().toLocaleDateString(),
      journal: "6345a0e2c27b76c356ab8cd1",
      user: "6345a070b1c34e65fbe299cc",
    },
    {
      comments: "I would of dyno-ed",
      likes: 3,
      helpful: 2,
      notHelpful: 20,
      date: new Date().toLocaleDateString(),
      journal: "6345a0e2c27b76c356ab8cd1",
      user: "6345a070b1c34e65fbe299cc",
    },
  ]);
}

seedCommentsDb();

module.exports = seedCommentsDb;
