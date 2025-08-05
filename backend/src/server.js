import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import notesroutes from "./routes/notesroutes.js";
import { connectdb } from "./config/db.js";
import rateLimit from "express-rate-limit";
import path from "path"
dotenv.config();

const __dirname = path.resolve();

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

if(process.env.NODE_ENV !== "production"){
app.use(cors({ origin: "http://localhost:5173" }));
}
app.use(express.json());
app.use("/api/notes", limiter, notesroutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname,"../frontend/dist")));
  app.get("/{*splat}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectdb();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
