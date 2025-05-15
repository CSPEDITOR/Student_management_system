import express from "express";
import { getUserProfile, loginUser, registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/upload.js";
import { protect } from "../middlewares/auth.js";

const router = express.Router();

// Route: POST /api/users/register
router.post("/register", upload.single("profileImg"), registerUser);

// Route: POST /api/users/login
router.post("/login", loginUser);
router.get("/profile", protect, getUserProfile);

export default router;
