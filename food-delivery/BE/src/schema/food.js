import { Schema, model } from "mongoose";

const foodModel = Schema({
  name: String,
  Image: String,
  ingredient: String,
  price: Number,
  discount: {
    type: Number,
    default: 0,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "category",
  },
});

export const FoodModel = new model("food", foodModel);
