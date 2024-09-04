import mongoose from "mongoose";

export const Connect = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("connected mongoose");
  } catch (error) {
    console.log(error);
  }
};
