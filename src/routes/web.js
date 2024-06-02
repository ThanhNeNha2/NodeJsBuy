const express = require("express");
const router = express.Router();
const { getHomepage } = require("../controllers/homeController");

router.get("/", (req, res) => {
  res.send("Trang home");
});
router.get("/thanh", (req, res) => {
  res.render("sample.ejs");
});
router.get("/ne", getHomepage);

module.exports = router;
