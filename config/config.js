module.exports = {
  jwtSecret: process.env.JWT_SECRET || "1djvw",
  jwtSession: process.env.JWT_SESSION || { session: false }
};
