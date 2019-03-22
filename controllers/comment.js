const express = require("express");
const router = express.Router();
const mongoose = require("../models/Comment");
const Comment = mongoose.model("Comment");
const Recipe = mongoose.model("Recipe");
const User = mongoose.model("User");

router.post("/recipe/:id", (req, res) => {
  User.findOne({ username: req.body.username })
    .then(user => {
      Comment.create({
        content: req.body.content,
        username: user._id
      });
    })
    .then(comment => {
      Recipe.findById({ _id: req.params.id }).then(recipe => {
        recipe.comments.push(comment._id);
        recipe.save(err => {
          console.log(err);
        });
        res.json(recipe);
      });
    });
});

router.delete("/:id", (req, res) => {
  // delete a comment in the database
  Comment.findByIdAndDelete(req.params.id).then(comment => {
    res.json(comment);
  });
});

module.exports = router;
