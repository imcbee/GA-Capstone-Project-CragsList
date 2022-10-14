const mongoose = require("mongoose");
require("dotenv").config();

const connectionStr = process.env.MONGODB_URI || "http://localhost:4000";
mongoose.connect(connectionStr);

mongoose.connection.on("connected", () => {
  console.log(
    `[${new Date().toLocaleDateString()}] - MongoDB Connected ... ✅ ✅ ✅`
  );
});

mongoose.connection.on("error", (err) => {
  console.log(`MongoDB connection error ❌ ❌ ❌`, err);
});

mongoose.connection.on("disconnected", () =>
  console.log("MongoDB disconnected  ⚡️ 🔌 ⚡️")
);
