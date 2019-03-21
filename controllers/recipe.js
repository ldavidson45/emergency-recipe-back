const express = require("express");
const router = express.Router();
const mongoose = require("../models/Recipe");
const Recipe = mongoose.model("Recipe");
var Comment = require("../models/Comment").Comment;
// const Fuse = require("fuse.js");

router.post("/", (req, res) => {
  // find and list out filtered recipes
  Recipe.find({
    keyIngredients: { $all: req.body }
  }).then(recipes => {
    res.json(recipes);
  });
});

      const fuse = new Fuse(recipes, options);

      const query = res.json(recipes);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/", (req, res) => {
  // find and list out filtered recipes
  Recipe.find().then(recipes => {
    res.json(recipes);
  });
});

router.post("/new", (req, res) => {
  // create a new recipe in the database
  Recipe.create(req.body)
    .then(recipe => {
      res.json(recipe);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  // show a single recipe
  Recipe.findById(req.params.id)
    .populate("comments")
    .then(recipe => {
      res.json(recipe);
    })
    .catch(err => {
      console.log(err);
    });
});

router.put("/:id", (req, res) => {
  // update a recipe in the database
  Recipe.findByIdAndUpdate(req.params.id, req.body).then(recipe => {
    res.json(recipe);
  });
});

router.delete("/:id", (req, res) => {
  // delete a recipe in the database
  Recipe.findByIdAndDelete(req.params.id)
    .then(recipe => {
      res.json(recipe);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
