const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  dishName: { type: String, required: true },
  ingredients: { type: [String], required: true },
  steps: { type: [{ step: String, time: Number }], required: true },
  dishImage: { type: String }, // Store image URL or base64 string
});

module.exports = mongoose.model("Recipe", RecipeSchema);
