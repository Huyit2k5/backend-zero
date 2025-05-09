const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getABC,
  getHuy,
  postCreateUser,
} = require("../controllers/homeController");

router.get("/", getHomePage);
router.get("/abc", getABC);
router.get("/huy", getHuy);

router.post("/create-user", postCreateUser);

module.exports = router;
