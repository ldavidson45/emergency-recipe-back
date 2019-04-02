const express = require("express");
const router = express.Router();
const mongoose = require("../models/Comment");
const Comment = mongoose.model("Comment");
const Recipe = mongoose.model("Recipe");

router.post("/recipe/:id", (req, res) => {
  let newComment = Comment.create({
    content: req.body.content,
    name: req.body.name
  })

    // Recipe.findByIdAndUpdate(req.params.id, {
    //   $push: { comments:  }
    // })
    .then(recipe => {
      res.json(recipe);
      console.log(newComment);
    });
  // .catch(err => {
  //   console.log(err);
  // });
});

router.delete("/:id", (req, res) => {
  // delete a comment in the database
  Comment.findByIdAndDelete(req.params.id).then(comment => {
    res.json(comment);
  });
});

module.exports = router;
