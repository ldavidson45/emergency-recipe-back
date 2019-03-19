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
  title: "spaghetti bolognese",
  keyIngredients: ["onion", "tomato", "beef", "garlic", "noodles"],
  servings: 5,
  prepTime: "20 minutes",
  picture:
    "https://images.unsplash.com/photo-1548247661-3d7905940716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80",
  instructions: "boil water & cook noodles, fry onions, brown meat, add pasta sauce"
  isApproved: true
});


Recipe.create({
  title: "mac & cheese",
  keyIngredients: ["noodles", "cheddar cheese"],
  servings: 3,
  prepTime: "20 minutes",
  picture:
    "https://images.unsplash.com/photo-1543339511-0aa1d17bfc2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  instructions: "boil water & cook noodles, layer on cheese and stir into cooked noodles"
  isApproved: true
});

Recipe.create({
  title: "tuna salad",
  keyIngredients: ["tuna", "celery", "mayonnaise", "red onion", "pickle"],
  servings: 3,
  prepTime: "20 minutes",
  picture:
    "https://images.unsplash.com/photo-1517254456976-ee8682099819?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1316&q=80",
  instructions: "mix tunafish with mayo, dived onions and pickles. then add to bread with arugula or lettuce"
  isApproved: true
});

Recipe.create({
  title: "guacamole",
  keyIngredients: ["avocado", "lime", "onion", "jalopeno"],
  servings: 3,
  prepTime: "20 minutes",
  picture:
    "https://images.unsplash.com/photo-1501199951034-d79a3f2d3039?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
  instructions: "mash the avocados, squeeze in lime, add diced onions and jalopenos. great to accompany with chips"
  isApproved: true
});

Recipe.create({
  title: "egg salad",
  keyIngredients: ["eggs", "mayonnaise", "onion"],
  servings: 3,
  prepTime: "20 minutes",
  picture:
    "https://images.unsplash.com/photo-1517652792063-9c3118770d54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  instructions: "mash hardboiled eggs, mix in mayonnaise and diced onions, add seasoning and arugula. great in a sandwich or eaten on its own.
  isApproved: true
});

