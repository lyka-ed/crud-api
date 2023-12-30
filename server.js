// Importing required modules
const express = require("express");
const mongoose = require("mongoose");
const connectDb = require('./config');
const app = express();
const product = require("./models/productModels");

// Load environment variables from a .env file
require('dotenv').config();

// Connect to MongoDB
connectDb();

// Event listener for successful MongoDB connection
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
  startServer();
});

// Event listener for MongoDB connection errors
mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

// Middleware for handling JSON data
app.use(express.json());

// Route for the home page
app.get('/', (req, res) => {
  res.send("Hi, I'm Lyka. This is my CRUD API building practice ");
});

// Route for saving data into the database system
app.post("/product", (req, res) => {
  try {
    // Your logic for saving data to the database will go here
    console.log(req.body);
    res.send(req.body);
  } catch (error) {
    console.error(`Error occurred: ${error}`);
    res.status(500).json({ message: error.message });
  }
});

// Function to start the server
function startServer() {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
