const express = require("express");
const router = express.Router();
const {
  postHomepage,
  getHome,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  getDeletePage,
  postDeleteUser,
} = require("../controllers/homeController");

router.get("/", getHome);
router.get("/create", getCreatePage);
router.post("/create-user", postHomepage);
router.get("/update/:id", getUpdatePage);
router.post("/edit-user", postUpdateUser);
router.get("/delete/:id", getDeletePage);
router.post("/delete-user", postDeleteUser);
module.exports = router;
