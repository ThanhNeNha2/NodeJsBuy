const Customer = require("../models/customer");

const createCustomerService = async (customerData) => {
  try {
    let result = await Customer.create({
      name: customerData.name,
      address: customerData.address,
      phone: customerData.phone,
      email: customerData.email,
      description: customerData.description,
      image: customerData.image,
    });
    return result;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
};
const createArrCustomerService = async (arr) => {
  try {
    let result = await Customer.insertMany(arr);
    return result;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
};
let getAllCustomers = async (limit, page) => {
  try {
    let result = null;
    if (limit && page) {
      let skip = (page - 1) * limit;
      result = await Customer.find({}).limit(limit).skip(skip).exec();
    } else {
      result = await Customer.find({});
    }
    return result;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
};
let putUpdateCustomers = async (data) => {
  console.log("check data truyen ", data);
  try {
    let result = await Customer.updateOne(
      { _id: data.id },
      { name: data.name, email: data.email, address: data.address }
    );
    return result;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
};
let deleteCustomer = async (id) => {
  try {
    let result = await Customer.deleteById({ _id: id });
    return result;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
};
let deleteMultipleCustomer = async (listId) => {
  try {
    let result = await Customer.delete({ _id: { $in: listId } });
    return result;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
};
module.exports = {
  createCustomerService,
  createArrCustomerService,
  getAllCustomers,
  putUpdateCustomers,
  deleteCustomer,
  deleteMultipleCustomer,
};
