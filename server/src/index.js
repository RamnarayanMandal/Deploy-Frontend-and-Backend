const express = require('express');
const connectDb = require("./config/dbConnection.js");
const dotenv = require("dotenv").config();
const cors = require("cors");
const path = require("path"); 

connectDb(); // Connect to the database

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies

// API routes
app.use("/api/panshop/order", require("./routes/panShopRoutes.js"));
app.use("/api/panShopLogin", require("./routes/panShopOwnerRoutes.js"));

// Serve static files
app.use(express.static(path.resolve(__dirname, "client", "build")));

// Define routes for client-side rendering
app.get("/", (req, res) => { 
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html")); 
}); 

app.get("/login/:panshopOwner_id", (req, res) => { 
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html")); 
}); 

app.get("/admin", (req, res) => { 
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html")); 
}); 

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
