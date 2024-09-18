import { model } from "mongoose";

const otpSchema = new Schema({
  email: {
    typr: String,
    required: true,
  },
  otp: {
    typr: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
    expires: "5m",
  },
});

export const otpModel = model("otp", otpSchema);
