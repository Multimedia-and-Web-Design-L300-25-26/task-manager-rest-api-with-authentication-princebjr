import express from "express";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();   // ✅ CREATE APP FIRST

app.use(express.json()); // ✅ middleware

// ✅ ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

export default app;  // ✅ VERY IMPORTANT