import express from "express";
import { getUserProfile, loginUser, registerUser, updateProfile } from "../controllers/user.controller.js";
import { upload } from "../middlewares/upload.js";
import { protect } from "../middlewares/auth.js";

const router = express.Router();

// Route: POST /api/users/register
router.post("/register", upload.single("profileImg"), registerUser);

// Route: POST /api/users/login
router.post("/login", loginUser);

// Route: GET /api/users/profile
router.get("/profile", protect, getUserProfile);

// Route: PUT /api/users/profile
router.put("/profile", protect, upload.single("profileImg"), updateProfile);

export default router;
