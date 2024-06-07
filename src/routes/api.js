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

// req.query
routerAPI.get("/info", (req, res) => {
  return res.status(200).json({
    errCode: 0,
    data: req.query,
  });
});

// req.params
routerAPI.get("/info/:name/:address", (req, res) => {
  console.log("check req.params", req.params);
  return res.status(200).json({
    errCode: 0,
    data: req.params,
  });
});

module.exports = routerAPI;
