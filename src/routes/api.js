const express = require("express");
const routerAPI = express.Router();
const {
  getUsersApi,
  postUsersApi,
  updateUsersApi,
  deleteUsersApi,
  postUploadSingleFileApi,
  postUploadMultipleFileApi,
} = require("../controllers/ApiController");

routerAPI.get("/users", getUsersApi);
routerAPI.post("/users", postUsersApi);
routerAPI.put("/users", updateUsersApi);
routerAPI.delete("/users", deleteUsersApi);

const { postCreateUsersApi } = require("../controllers/customerController");
// File
routerAPI.post("/file", postUploadSingleFileApi);
routerAPI.post("/files", postUploadMultipleFileApi);

// Customer
routerAPI.post("/customers", postCreateUsersApi);

module.exports = routerAPI;
