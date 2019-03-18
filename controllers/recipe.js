const express = require("express");
const router = express.Router();
const mongoose = require("../models/Recipe");
const Recipe = mongoose.model("Recipe");

router.get("/", (req, res) => {
  // find and list out all recipes
  Recipe.find()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/new", (req, res) => {
  // render form to create a new recipe
});

router.post("/", (req, res) => {
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
    .then(recipe => {
      res.json(recipe);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id/edit", (req, res) => {
  // render a form to update a single recipe
});

router.put("/:id", (req, res) => {
  // update a recipe in the database
});

router.delete("/:id", (req, res) => {
  // delete a recipe in the database
});

module.exports = router;
