const express = require("express");
const routerAPI = express.Router();
const {
  getUsersApi,
  postUsersApi,
  updateUsersApi,
  deleteUsersApi,
} = require("../controllers/ApiController");

routerAPI.get("/users", getUsersApi);
routerAPI.post("/users", postUsersApi);
routerAPI.put("/users", updateUsersApi);
routerAPI.delete("/users", deleteUsersApi);

module.exports = routerAPI;
