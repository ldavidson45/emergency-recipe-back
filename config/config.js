require("dotenv").config();

module.exports = {
  jwtSecret: process.env.JWT_SECRET,
  jwtSession: process.env.JWT_SESSION
};
