module.exports = {
  jwtSecret: process.env.jwtSecret || "LPJYlammas",
  jwtSession: process.env.jwtSession || {
    session: false
  }
};
