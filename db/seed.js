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

Recipe.create({
  title: "pizza",
  keyIngredients: [
    "tomato",
    "mozzarella cheese",
    "peppers",
    "onions",
    "olives",
    "flour"
  ],
  servings: 4,
  prepTime: "25 minutes",
  picture:
    "https://images.unsplash.com/photo-1528490060256-c345efae4442?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80",
  instructions:
    "toss & roll the dough, spread your sauce, sprinkle on the cheese, layer on your toppings",
  isApproved: true
});

Recipe.create({
  title: "pasta",
  keyIngredients: ["onion", "tomato", "beef", "peppers"],
  servings: 3,
  prepTime: "20 minutes",
  picture:
    "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  instructions: "wash, slice and mix all the ingredients",
  isApproved: true
});
