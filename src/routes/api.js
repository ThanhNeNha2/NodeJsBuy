const express = require("express");
const routerAPI = express.Router();
const { getUsersApi, postUsersApi } = require("../controllers/ApiController");

routerAPI.get("/users", getUsersApi);
routerAPI.post("/users", postUsersApi);
module.exports = routerAPI;
