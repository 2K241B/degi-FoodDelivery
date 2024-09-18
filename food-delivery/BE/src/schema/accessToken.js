import { Schema, model } from "mongoose";

const accessTokenSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
    expires: "5m",
  },
});

export const accessTokenModel = model("accessTokens", accessTokenSchema);
