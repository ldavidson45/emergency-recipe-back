const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Comment = new Schema({
  recipe: {
    type: Schema.Types.ObjectId,
    ref: "Recipe"
  },

  content: String
});

module.exports = mongoose.model("Comment", Comment);
