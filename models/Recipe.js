const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Recipe = new Schema({
  title: String,
  keyIngredients: [String],
  servings: Number,
  prepTime: String,
  picture: String,
  instructions: String,
  isApproved: Boolean,
  recipe: {
    type: Schema.Types.ObjectId,
    ref: "Recipe"
  }
});

module.exports = mongoose.model("Recipe", Recipe);
