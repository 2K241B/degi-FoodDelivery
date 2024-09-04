import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: String,
  password: {
    type: String,
    required: true,
  },
  phoneNumber: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

export const userModel = model("user", userSchema);
