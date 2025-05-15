import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register New User
export const registerUser = async (req, res) => {
  try {
    const { jeeAppNo, dob, rank, phone, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ 
      $or: [{ email }, { jeeAppNo }] 
    });
    
    if (existingUser) {
      return res.status(400).json({ 
        message: existingUser.email === email 
          ? "User already exists with this email." 
          : "User already exists with this JEE Application Number." 
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Handle profile image path
    const profileImg = req.file ? req.file.filename : "";

    // Create user
    const newUser = new User({
      jeeAppNo,
      dob,
      rank,
      phone,
      email,
      password: hashedPassword,
      profileImg,
    });

    await newUser.save();

    // Return user data without password
    const userResponse = {
      id: newUser._id,
      jeeAppNo: newUser.jeeAppNo,
      email: newUser.email,
      role: newUser.role,
      profileImg: newUser.profileImg
    };

    res.status(201).json({ 
      message: "User registered successfully", 
      user: userResponse 
    });
  } catch (error) {
    console.error("Registration Error:", error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        message: "Validation Error", 
        errors: Object.values(error.errors).map(err => err.message)
      });
    }
    res.status(500).json({ message: "Server error" });
  }
};

// Login User with JWT
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found with this email." });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password." });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d", // optional: expires in 7 days
    });

    // Send token and user data
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.email,
        jeeAppNo: user.jeeAppNo,
        profileImg: user.profileImg,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const userId = req.userId; // set by middleware
    const user = await User.findById(userId).select("-password"); // exclude password
    
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching all users:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const userId = req.userId; // set by middleware
    const { jeeAppNo, dob, rank, phone, email } = req.body;

    // Find user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if email is being changed and if it's already taken
    if (email && email !== user.email) {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already in use" });
      }
    }

    // Check if JEE Application Number is being changed and if it's already taken
    if (jeeAppNo && jeeAppNo !== user.jeeAppNo) {
      const existingUser = await User.findOne({ jeeAppNo });
      if (existingUser) {
        return res.status(400).json({ message: "JEE Application Number already in use" });
      }
    }

    // Update user fields
    const updateFields = {};
    if (jeeAppNo) updateFields.jeeAppNo = jeeAppNo;
    if (dob) updateFields.dob = dob;
    if (rank) updateFields.rank = rank;
    if (phone) updateFields.phone = phone;
    if (email) updateFields.email = email;
    if (req.file) updateFields.profileImg = req.file.filename;

    // Update user
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updateFields },
      { new: true, runValidators: true }
    ).select("-password");

    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser
    });
  } catch (error) {
    console.error("Profile Update Error:", error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        message: "Validation Error",
        errors: Object.values(error.errors).map(err => err.message)
      });
    }
    res.status(500).json({ message: "Server error" });
  }
};
