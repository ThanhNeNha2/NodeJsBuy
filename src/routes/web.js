const express = require("express");
const router = express.Router();
const {
  postHomepage,
  getHome,
  getCreatePage,
} = require("../controllers/homeController");

router.get("/create", getCreatePage);
router.get("/", getHome);
router.post("/create-user", postHomepage);

module.exports = router;
