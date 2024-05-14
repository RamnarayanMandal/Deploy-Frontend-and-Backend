
const express = require('express');
const router = express.Router();
const connectDb = require("./config/dbConnection.js");
const dotenv =require("dotenv").config();
const cors = require("cors");
const path = require("path"); 

connectDb(); // Connect to the database

const app = express();
module.exports = router;
const port = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all routes

// Middleware to parse JSON bodies
app.use(express.json());

// API routes
app.use("/api/panshop/order", require("./routes/panShopRoutes.js"));
app.use("/api/panShopLogin", require("./routes/panShopOwnerRoutes.js"));

app.get("/", (req, res) => { 
  app.use(express.static(path.resolve(__dirname, "client", "build"))); 
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html")); 
}); 

app.get("/login/:panshopOwner_id", (req, res) => { 
  app.use(express.static(path.resolve(__dirname, "client", "build"))); 
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html")); 
}); 

app.get("/admin", (req, res) => { 
  app.use(express.static(path.resolve(__dirname, "client", "build"))); 
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html")); 
}); 

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
