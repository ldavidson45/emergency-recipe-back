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
  let count = 30;
  let i = 0;
  let arrayRecipes = [];
  for (i; i < count; i++) {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(recipe => {
        let selectedRecipe = recipe.data.meals[0];
        let rando = {
          title: selectedRecipe.strMeal,
          keyIngredients: [
            selectedRecipe.strIngredient1,
            selectedRecipe.strIngredient2,
            selectedRecipe.strIngredient3,
            selectedRecipe.strIngredient4,
            selectedRecipe.strIngredient5,
            selectedRecipe.strIngredient6,
            selectedRecipe.strIngredient7,
            selectedRecipe.strIngredient8,
            selectedRecipe.strIngredient9,
            selectedRecipe.strIngredient10,
            selectedRecipe.strIngredient11,
            selectedRecipe.strIngredient12,
            selectedRecipe.strIngredient13,
            selectedRecipe.strIngredient14,
            selectedRecipe.strIngredient15,
            selectedRecipe.strIngredient16
          ],
          servings: null,
          prepTime: null,
          picture: selectedRecipe.strMealThumb,
          instructions: selectedRecipe.strInstructions,
          isApproved: true
        };
        arrayRecipes.push(rando);
        res.json(arrayRecipes);
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
