const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};
const getABC = (req, res) => {
  res.send("<h1>Hello abc!<h1>");
};
const getHuy = (req, res) => {
  res.render("sample.ejs");
};
const postCreateUser = (req, res) => {
  console.log(">>> req.body:", req.body);
  res.send("create new user");
};
module.exports = {
  getHomePage,
  getABC,
  getHuy,
  postCreateUser,
};
