const express = require("express");
const router = express.Router();
const mongoose = require("../models/Comment");
const Comment = mongoose.model("Comment");
const Recipe = mongoose.model("Recipe");

router.post("/recipe/:id", (req, res) => {
  Comment.create(req.body)
    .then(comment => {
      Recipe.findByIdAndUpdate(req.params.id, {
        $push: { comments: comment._id }
      }).then(recipe => {
        res.json(recipe);
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete a comment in the database
  Comment.findByIdAndDelete(req.params.id).then(comment => {
    res.json(comment);
  });
});

module.exports = router;
