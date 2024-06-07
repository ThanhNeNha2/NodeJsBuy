const { uploadSingleFile } = require("../services/fileService");
const {
  createCustomerService,
  createArrCustomerService,
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
module.exports = { postCreateCustomer, postCreateArrCustomer };
