require("dotenv").config();

module.exports = {
  jwtSecret: process.env.JWT_SECRET || "1djvw",
  jwtSession: process.env.JWT_SESSION || "20202"
};
