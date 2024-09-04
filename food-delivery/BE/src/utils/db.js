import mongoose from "mongoose";

export const Connect = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};
