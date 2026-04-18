// server.js

import dotenv from "dotenv";
dotenv.config(); // load .env first

import mongoose from "mongoose";
import app from "./src/app.js";

// debug
console.log("MONGO_URI:", process.env.MONGO_URI);

// Connect to MongoDB (no options needed for Mongoose 7+)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));