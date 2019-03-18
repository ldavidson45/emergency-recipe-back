const Recipe = require("../models/Recipe");

Recipe.remove({}).then(function() {
  Recipe.create({
    title: "tacos",
    keyIngredients: ["onion", "tomato", "beef", "peppers"],
    servings: 3,
    prepTime: "20 minutes",
    picture:
      "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    instructions: "wash, slice and mix all the ingredients",
    isApproved: true
  });
});
