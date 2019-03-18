const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Rating = new Schema({
  thumbRating: Boolean,
  recipe: {
    type: Schema.Types.ObjectId,
    ref: "Recipe"
  }
});

module.exports = mongoose.model("Rating", Rating);
