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

// ******** CUSTOMER ********
const {
  postCreateCustomer,
  postCreateArrCustomer,
  getAllCustomer,
  putUpdateCustomer,
  deleteACustomer,
  deleteManyCustomer,
} = require("../controllers/customerController");
// File
routerAPI.post("/file", postUploadSingleFileApi);
routerAPI.post("/files", postUploadMultipleFileApi);

// Customer
routerAPI.get("/customers", getAllCustomer);
routerAPI.post("/customers", postCreateCustomer);
routerAPI.post("/customers-many", postCreateArrCustomer);
routerAPI.put("/customers", putUpdateCustomer);
routerAPI.delete("/customers", deleteACustomer);
routerAPI.delete("/customers-many", deleteManyCustomer);

module.exports = routerAPI;
