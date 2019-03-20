const express = require("express");
const router = express.Router();
const mongoose = require("../models/Recipe");
const Recipe = mongoose.model("Recipe");
var Comment = require("../models/Comment").Comment;
const Fuse = require("fuse.js");
const axios = require("axios");
const config = require("../config/config");

const searchAPIurl = "https://www.food2fork.com/api/search?key=";
const getAPIurl = "https://www.food2fork.com/api/get?key=";
const key = config.recipeAPI;

router.get("/seed", (req, res) => {
  axios
    .get(searchAPIurl + key + "&q=garlic%20cheese")
    .then(recipes => {
      const selectedRecipes = recipes.data.recipes;
      const ids = selectedRecipes.map(recipe => {
        return recipe.recipe_id;
      });
      res.json(ids);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/getseeds", (req, res) => {
  let recipeIds = [
    "47251",
    "55babf",
    "ad7d2f",
    "32644",
    "10106",
    "0ade30",
    "006d04",
    "14241",
    "992e21",
    "50791",
    "14198",
    "0bfca1",
    "cde4d0",
    "fc9d2c",
    "36296",
    "14242",
    "34139",
    "34981",
    "6410",
    "02db19",
    "24553",
    "6411",
    "50372",
    "14239",
    "52322",
    "6e8dd0",
    "d7d315",
    "ea7d1d",
    "8670f8",
    "60bd67"
  ];
  for (i = 0; i < recipeIds.length; i++) {
    let results = [];
    axios
      .get(getAPIurl + key + "&rId=" + recipeIds[i])
      .then(recipe => {
        results.push(recipe.data);
        res.json(results);
      })

      .catch(err => {
        console.log(err);
      });
  }
});

router.post("/", (req, res) => {
  // find and list out filtered recipes
  Recipe.find({})
    .then(recipes => {
      var options = {
        shouldSort: true,
        tokenize: true,
        matchAllTokens: true,
        findAllMatches: true,
        threshold: 0.4,
        location: 0,
        distance: 1000,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ["keyIngredients"]
      };
      var searchTerms = req.body[0];
      console.log(req.body);
      var fuse = new Fuse(recipes, options); // "list" is the item array
      var result = fuse.search(searchTerms);

      res.json(result);
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
