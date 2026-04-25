import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import dataRoutes from "./routes/dataRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import collectionRoutes from "./routes/collectionRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.json({
    message: "Skills Career backend is running",
    status: "ok",
  });
});

app.use("/api/data", dataRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/collections", collectionRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
