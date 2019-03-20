const seedData = require("./jsonSeeds.json");
const Recipe = require("../models/Recipe");


// This code block is from the express to-do app in class.
Recipe.remove({})
  .then(() => {
    return Todo.collection.insert(seedData);
  })
  .then(() => {
    process.exit();
  });
