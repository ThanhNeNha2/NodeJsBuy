const Task = require("../models/task");
const aqp = require("api-query-params");
let CreateATask = async (data) => {
  try {
    if (data.type === "EMPTY-TASK") {
      let result = await Task.create(data);
      return result;
    }
  } catch (error) {
    console.log("ERROR >>> ", error);
    return null;
  }
};
let getTask = async (data) => {
  try {
    let { limit, skip, filter } = aqp(data);
    let newSkip = (skip - 1) * limit;
    let result = await Task.find(filter).limit(limit).skip(newSkip).exec();
    return result;
  } catch (error) {
    console.log("ERROR >>> ", error);
    return null;
  }
};

let updateATask = async (data) => {
  try {
    let result = await Task.update(
      { _id: data.id },
      {
        ...data,
      }
    );
    return result;
  } catch (error) {
    console.log("ERROR >>> ", error);
    return null;
  }
};

let deleteTask = async (data) => {
  try {
    let id = data.id;
    let result = await Task.deleteById({ _id: id });
    return result;
  } catch (error) {
    console.log("ERROR >>> ", error);
    return null;
  }
};
module.exports = {
  CreateATask,
  getTask,
  deleteTask,
  updateATask,
};
