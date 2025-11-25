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
  image_url: String
}), "menu-items");

// API route
app.get("/menu", async (req, res) => {
  const items = await MenuItem.find();
    console.log("Fetched items:", items); // see in your terminal
    console.log("Collection name:", MenuItem.collection.collectionName);
console.log("Database name:", MenuItem.db.name);
  res.json(items);
});

app.listen(5000, () => console.log("Server running on port 5000"));
