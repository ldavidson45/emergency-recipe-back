const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const app = express();
const recipeController = require("./controllers/recipe.js");

app.use(cors());
app.use(parser.json());

app.use("/api/recipe", recipeController);

app.listen(3000, console.log("listening on Port 3000"));
