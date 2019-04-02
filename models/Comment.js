const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Comment = new Schema({
  name: {
    type: Schema.Types.String,
    ref: "User"
  },
  content: String
});

module.exports = mongoose.model("Comment", Comment);
