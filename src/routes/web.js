const express = require("express");

const router = express.Router();

router.get("/thanh", (req, res) => {
  res.render("sample.ejs");
});

module.exports = router;
