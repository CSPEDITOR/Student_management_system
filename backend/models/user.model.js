import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    jeeAppNo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    rank: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      validate: {
        validator: function(v) {
          // Allow numbers with or without country code, spaces, or dashes
          return /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(v);
        },
        message: props => `${props.value} is not a valid phone number!`
      }
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImg: {
      type: String, // This should be the file name or URL
      default: "",  // Optional: Set default image path if needed
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
