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

// File
routerAPI.post("/file", postUploadSingleFileApi);
routerAPI.post("/files", postUploadMultipleFileApi);

// Customer

module.exports = routerAPI;
