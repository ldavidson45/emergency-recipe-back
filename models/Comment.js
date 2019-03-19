const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Comment = new Schema({
  name: String,
  content: String
});

module.exports = mongoose.model("Comment", Comment);
