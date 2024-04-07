const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();
const jobRoutes = require("./routes/jobRoutes"); // Adjusted for a models directory

// Express app
const app = express();

// Middle-ware for JSON in API
app.use(express.json());

// API "GET" Commands
app.get("/", (req, res) => {
  res.send("Hello from node API! updated");
});

//Use Routes
app.use("/api/jobs", jobRoutes);

// Serve static assets if in production
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Connects to Mongo DB using secure credentials
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to Database");
  })

  .catch(() => {
    console.log("Error: Connecting to Database");
  });