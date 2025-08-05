import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import notesroutes from "./routes/notesroutes.js";
import { connectdb } from "./config/db.js";
import rateLimit from "express-rate-limit";
dotenv.config();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100,
  message: {
    status: 429,
    message: "Too many requests, please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use("/api/notes", limiter, notesroutes);

connectdb();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
