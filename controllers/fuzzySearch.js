const express = require("express");
const mongoose = require("../models/Recipe");
const Recipe = mongoose.model("Recipe");
const Fuse = require("fuse.js");

function fuzzySearchrecipes() {
  Recipe.find()
    .then(recipes => {
      const options = {
        shouldSort: true,
        includeScore: true,
        threshold: 0.3,
        location: 0,
        distance: 100,
        findAllMatches: true,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ["keyIngredients"]
      };

      const fuse = new Fuse(recipes, options);
      const terms = req.body;

      let resultMap = {};
      terms.forEach(term => {
        const result = fuse.search(term);
        result.forEach(res => {
          const id = res.item.id;
          console.log(res.keyIngredients, term);
          // If there's no entry for it, create it

          if (!resultMap[id]) {
            resultMap[id] = {
              _id: id,
              title: res.item.title,
              keyIngredients: res.item.keyIngredients.filter(Boolean),
              servings: res.item.servings,
              prepTime: res.item.prepTime,
              picture: res.item.picture,
              instructions: res.item.instructions,
              isApproved: res.item.isApproved,
              comments: res.item.comments,
              matchedIngredients: 1,
              totalScore: res.score,
              remainingIngredients: res.item.keyIngredients.length - 1
            };
          } else {
            resultMap[id].matchedIngredients += 1;
            resultMap[id].totalScore += res.score;
            resultMap[id].remainingIngredients -= 1;
          }
        });
      });
      // Convert map into array. This will make it easier to sort.

      let results = Object.values(resultMap);
      // Sort the results by `matchedIngredients` AND `totalScore`

      results.sort((a, b) => {
        // sort by remaining ingredients

        if (a.remainingIngredients > b.remainingIngredients) return 1;
        if (a.remainingIngredients < b.remainingIngredients) return -1;

        // Sort by `totalScore` next
        if (a.totalScore > b.totalScore) return 1;
        if (a.totalScore < b.totalScore) return -1;
      });
      res.json(results);
    })
    .catch(err => {
      console.log(err);
    });
}
