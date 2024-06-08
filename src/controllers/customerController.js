const { uploadSingleFile } = require("../services/fileService");
const aqp = require("api-query-params");
const {
  createCustomerService,
  createArrCustomerService,
  getAllCustomers,
  putUpdateCustomers,
  deleteCustomer,
  deleteMultipleCustomer,
} = require("../services/customerService");
let postCreateCustomer = async (req, res) => {
  let { name, address, phone, email, description } = req.body;

  let imageUrl = "";
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  } else {
    let results = await uploadSingleFile(req.files.image);
    imageUrl = results.path;
  }
  let customerData = {
    name,
    address,
    phone,
    email,
    description,
    image: imageUrl,
  };
  let customer = await createCustomerService(customerData);
  return res.status(200).json({
    errCode: 0,
    data: customer,
  });
};
let postCreateArrCustomer = async (req, res) => {
  let result = await createArrCustomerService(req.body.customers);

  if (result) {
    return res.status(200).json({
      errCode: 0,
      data: result,
    });
  } else {
    return res.status(200).json({
      errCode: -1,
      data: result,
    });
  }
};
let getAllCustomer = async (req, res) => {
  // let limit = req.query.limit;
  // let page = req.query.page;
  // let name = req.query.name;
  const query = aqp(req.query);

  let result = null;
  if (query) {
    result = await getAllCustomers(query);
  } else {
    result = await getAllCustomers();
  }
  if (result) {
    return res.status(200).json({
      errCode: 0,
      data: result,
    });
  } else {
    return res.status(200).json({
      errCode: -1,
      data: result,
    });
  }
};
let putUpdateCustomer = async (req, res) => {
  let result = await putUpdateCustomers(req.body);
  return res.status(200).json({
    errCode: 0,
    data: result,
  });
};

let deleteACustomer = async (req, res) => {
  let result = await deleteCustomer(req.body.id);
  return res.status(200).json({
    errCode: 0,
    data: result,
  });
};
let deleteManyCustomer = async (req, res) => {
  console.log(" check req.body", req.body);
  let result = await deleteMultipleCustomer(req.body.customers);
  return res.status(200).json({
    errCode: 0,
    data: result,
  });
};

module.exports = {
  postCreateCustomer,
  postCreateArrCustomer,
  getAllCustomer,
  putUpdateCustomer,
  deleteACustomer,
  deleteManyCustomer,
};
