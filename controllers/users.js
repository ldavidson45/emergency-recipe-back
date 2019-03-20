const express = require("express");
const router = express.Router();
const jwt = require("jwt-simple");
const passport = require("../config/passport");
const config = require("../config/config");
const mongoose = require("../models/User");
const User = mongoose.model("User");

// we need a signup form on the FE
// we need to receive the input from the browser
// search the db to find if another user has used the same email
// if not create an instance in the db
// generate JWT holding the user id
// send JWT to the browser

router.post("/signup", (req, res) => {
  if (req.body.username && req.body.password) {
    let newUser = {
      username: req.body.username,
      password: req.body.password
    };
    User.findOne({ username: req.body.username }).then(user => {
      if (!user) {
        User.create(newUser).then(user => {
          if (user) {
            var payload = {
              id: newUser.id
            };
            var token = jwt.encode(payload, config.jwtSecret);
            res.json({
              token: token
            });
          } else {
            res.sendStatus(401);
          }
        });
      } else {
        res.sendStatus(401);
      }
    });
  } else {
    res.sendStatus(401);
  }
});

// user login
// recieve username and pw inputs from password
// find user with matching username in db
// if the user exists, check that the passwords match
// if they match, create a jwt token with the user id
// send jwt token back to browser

router.post("/login", (req, res) => {
  if (req.body.username && req.body.password) {
    User.findOne({ username: req.body.username }).then(user => {
      if (user) {
        if (user.password === req.body.password) {
          var payload = {
            id: user.id
          };
          var token = jwt.encode(payload, config.jwtSecret);
          res.json({
            token: token
          });
        } else {
          res.sendStatus(401);
        }
      } else {
        res.sendStatus(401);
      }
    });
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
