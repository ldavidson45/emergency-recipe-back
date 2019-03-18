const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Recipe = new Schema({
  title: String,
  keyIngredients: [String],
  servings: Number,
  prepTime: String,
  picture: String,
  instructions: String,
  isApproved: Boolean
});

module.exports = mongoose.model("Recipe", Recipe);
