const connection = require("../config/database");
const CURDService = require("../services/CRUDService");
const User = require("../models/user");

let getHome = async (req, res) => {
  // let results = await CURDService.getAllUser() ;
  let results = await User.find({});

  return res.render("home.ejs", { listUses: results });
};
let getCreatePage = (req, res) => {
  return res.render("create.ejs");
};
let postHomepage = async (req, res) => {
  let { email, name, city } = req.body;
  // await CURDService.createUser(email, name, city);
  await User.create({
    email,
    name,
    city,
  });
  return res.send("Create user success!");
};
let getUpdatePage = async (req, res) => {
  let id = req.params.id;
  // let user = await CURDService.getUserupdate(id);
  let user = await User.findById(id).exec();
  return res.render("edit.ejs", { userEdit: user });
};
let postUpdateUser = async (req, res) => {
  let id = req.body.id;
  let name = req.body.name;
  let email = req.body.email;
  let city = req.body.city;

  // await CURDService.updateUser(id, email, name, city);
  await User.updateOne(
    { _id: id },
    {
      name,
      email,
      city,
    }
  );
  return res.send("update thanh cong");
};
let getDeletePage = async (req, res) => {
  let id = req.params.id;
  let user = await CURDService.getUserupdate(id);

  return res.render("delete.ejs", { userEdit: user });
};

let postDeleteUser = async (req, res) => {
  let id = req.body.id;
  await CURDService.DeleteUser(id);
  return res.redirect("/");
};
module.exports = {
  postHomepage,
  getCreatePage,
  getHome,
  getUpdatePage,
  postUpdateUser,
  getDeletePage,
  postDeleteUser,
};
