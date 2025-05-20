import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import contact from "./routes/Contact.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 1000;

// ✅ Use CORS middleware BEFORE any routes
app.use(cors({
  origin: ["https://mpholidayss.netlify.app"], // frontend URL only
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // include OPTIONS
  allowedHeaders: ["Content-Type", "Authorization"], // optional but helpful
  credentials: true
}));

// ✅ Handle preflight OPTIONS requests
app.options("*", cors());

// Body parser
app.use(express.json());

// Routes
app.use("/api", contact);

// MongoDB connection
mongoose.connect(process.env.MONGOURI)
  .then(() => console.log('Connected to database'))
  .catch(() => console.log('Disconnected'));

// Test route
app.get("/", (req, res) => {
  res.send('Arpita Trivedi');
});

// Start server
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
