import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import contact from "./routes/Contact.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 1000;

// ✅ Always use CORS middleware before routes
app.use(cors({
  origin: ["https://mpholidayss.netlify.app/"],
  methods: ["GET", "POST", "PUT", "DELETE"], // 🛠️ Fix typo: PORT → POST
  credentials: true
}));

app.use(express.json());
app.use("/api", contact);

// Connect to MongoDB
mongoose.connect(process.env.MONGOURI)
  .then(() => console.log('Connected to database'))
  .catch(() => console.log('Disconnected'));

// Root route
app.get("/", (req, res) => {
  console.log("Arpita");
  res.send('Arpita Trivedi');
});

// Start server
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
