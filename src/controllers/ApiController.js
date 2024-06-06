const User = require("../models/user");

const {
  uploadSingleFile,
  uploadMultipleFile,
} = require("../services/fileService");

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

let postUploadSingleFileApi = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  let results = await uploadSingleFile(req.files.image);
  console.log("checkkk results ", results);

  return res.status(200).json({
    data: results,
  });
};

let postUploadMultipleFileApi = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  if (Array.isArray(req.files.image)) {
    let results = await uploadMultipleFile(req.files.image);
    console.log("checkkk results ", results);

    return res.status(200).json({
      data: results,
    });
  } else {
    return await postUploadSingleFileApi(req, res);
  }
};
module.exports = {
  getUsersApi,
  postUsersApi,
  updateUsersApi,
  deleteUsersApi,
  postUploadSingleFileApi,
  postUploadMultipleFileApi,
};
