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
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

module.exports = mongoose.model("Recipe", Recipe);
