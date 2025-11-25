const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Schema
const MenuItem = mongoose.model("MenuItem", new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  availability: Boolean,
  image: String
}), "menu_items");

// API route
app.get("/menu", async (req, res) => {
  const items = await MenuItem.find();
  res.json(items);
});

app.listen(5000, () => console.log("Server running on port 5000"));
