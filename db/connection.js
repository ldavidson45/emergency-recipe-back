const mongoose = require("mongoose");
mongoose.Promise = Promise;

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.DB_URL),
    {
      useNewURLParser: true
    };
} else {
  mongoose.connect("mongodb://localhost/recipeapp", {
    useNewUrlParser: true
  });
}

module.exports = mongoose;
