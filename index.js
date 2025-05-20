// server.js
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import contact from "./routes/Contact.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 1000;

// ✅ Use correct client URL in CORS (no trailing slashes!)
app.use(cors({
  origin: ["https://mpholidayss.netlify.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());

// ✅ Route should match frontend URL (use /contact, not /api/contact)
app.use("/contact", contact);

// ✅ MongoDB connection
mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ Failed to connect to MongoDB:', err));

// ✅ Health check route
app.get("/", (req, res) => {
  res.send('🟢 Server is running - Arpita Trivedi');
});

// ✅ Start server
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
