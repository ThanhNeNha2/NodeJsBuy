const User = require("../models/user");

let getUsersApi = async (req, res) => {
  // let results = await CURDService.getAllUser() ;
  let results = await User.find({});

  return res.status(200).json({
    errCode: 0,
    data: results,
  });
};
let postUsersApi = async (req, res) => {
  let { email, name, city } = req.body;
  // let results = await CURDService.getAllUser() ;
  let results = await User.create({
    email,
    name,
    city,
  });

  return res.status(200).json({
    errCode: 0,
    data: results,
  });
};
module.exports = {
  getUsersApi,
  postUsersApi,
};
