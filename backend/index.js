import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import cors from "cors";
import userRoutes from "./routes/user.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
}; 

app.use(cors(corsOptions));

app.use("/api/users", userRoutes);

app.get("/", (req, res)=>{
  return res.status(200).json({
    message: "I am from backend",
    success: true
  });
});

app.listen(PORT, () => {
  connectDB();
  console.log(`App listening on port ${PORT}`);
});