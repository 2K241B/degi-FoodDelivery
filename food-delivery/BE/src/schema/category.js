import { Schema, model } from "mongoose";

const categoryModel = Schema({
  name: String,
});

export const CategoryModel = new model("category", categoryModel);
