const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const app = express();
const recipeController = require("./controllers/recipe.js");
const commentController = require("./controllers/comment.js");

app.use(cors());
app.use(parser.json());

app.use("/api/recipe", recipeController);
app.use("/api/comment", commentController);

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
