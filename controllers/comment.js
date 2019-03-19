const express = require("express");
const router = express.Router();
const mongoose = require("../models/Comment");
const Comment = mongoose.model("Comment");
const Recipe = mongoose.model("Recipe");

router.post("/:id", (req, res) => {
  Comment.create(req.body).then(comment => {
    Recipe.findById({ _id: req.params.id }).then(recipe => {
      recipe.comments.push(comment._id);
      recipe.save(err => {
        console.log(err);
      });
      res.json(recipe);
    });
  });
});

module.exports = router;
