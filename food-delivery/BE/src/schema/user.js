import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    minLength: [10, "Please enter a valid email"],
    maxLength: [50, "Please enter a valid email"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "PhoneNumber is required"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

export const userModel = model("user", userSchema);
