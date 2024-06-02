const connection = require("../config/database");
const CURDService = require("../services/CRUDService");
let getCreatePage = (req, res) => {
  return res.render("create.ejs");
};
let getHome = async (req, res) => {
  let results = await CURDService.getAllUser();
  console.log("check results", results);
  res.render("home.ejs", { results: JSON.stringify(results) });
};

let postHomepage = (req, res) => {
  let { email, name, city } = req.body;
  console.log("email", email, "name", name, "city", city);
  connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?,  ?, ?)`,
    [email, name, city],
    function (err, results) {
      console.log("check results", results);
      res.send("Create user success");
    }
  );
};
module.exports = {
  postHomepage,
  getCreatePage,
  getHome,
};
