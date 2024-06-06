const { uploadSingleFile } = require("../services/fileService");
const { createCustomerService } = require("../services/customerService");
let postCreateUsersApi = async (req, res) => {
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

module.exports = { postCreateUsersApi };
