const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Auth middleware
const auth = require("./middleware/auth");

// Routes
const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected 🚀"))
  .catch((err) => console.log("Mongo Error:", err.message));

// Test route
app.get("/", (req, res) => {
  res.send("🚀 SaaS Backend Running");
});

// Protected route (Dashboard)
app.get("/api/dashboard", auth, (req, res) => {
  res.json({ message: "Welcome to SaaS Dashboard 🚀" });
});

// Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
