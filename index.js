const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(parser.json());

app.listen(3000, console.log("listening on Port 3000"));
