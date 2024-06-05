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
let updateUsersApi = async (req, res) => {
  let id = req.body.id;
  let name = req.body.name;
  let email = req.body.email;
  let city = req.body.city;

  // await CURDService.updateUser(id, email, name, city);
  let results = await User.updateOne(
    { _id: id },
    {
      name,
      email,
      city,
    }
  );
  return res.status(200).json({
    errCode: 0,
    data: results,
  });
};
let deleteUsersApi = async (req, res) => {
  let id = req.body.id;

  let results = await User.deleteOne({ _id: id });
  return res.status(200).json({
    errCode: 0,
    data: results,
  });
};
module.exports = {
  getUsersApi,
  postUsersApi,
  updateUsersApi,
  deleteUsersApi,
};
