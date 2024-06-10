const Project = require("../models/project");

let CreateAProject = async (data) => {
  try {
    if (data.type === "EMPTY-PROJECT") {
      let result = await Project.create(data);
      return result;
    }
    if (data.type === "ADD-USERS") {
      let result = await Project.findById(data.projectId).exec();

      for (let i = 0; i < data.usersArr.length; i++) {
        result.usersInfor.push(data.usersArr[i]);
      }
      await result.save();
      return result;
    }
    // xóa usersInfor trong project
    if (data.type === "REMOVE-USERS") {
      let myProject = await Project.findById(data.projectId).exec();

      for (let i = 0; i < data.usersArr.length; i++) {
        myProject.usersInfor.pull(data.usersArr[i]);
      }
      let newResult = await myProject.save();
      return newResult;
    }

    // ADD TASK

    if (data.type === "ADD-TASKS") {
      let result = await Project.findById(data.projectId).exec();
      for (let i = 0; i < data.taskId.length; i++) {
        result.tasks.push(data.taskId[i]);
      }
      await result.save();
      return result;
    }
  } catch (error) {
    console.log("ERROR >>> ", error);
    return null;
  }
};
let getProject = async (query) => {
  try {
    let { skip, limit, filter, population } = query;
    console.log("check", query);
    // ***** trong trường hợp không biết dùng / / của thư viện
    // filter["name"] = { $regex: ".*" + filter.name + ".*" };

    let numberSkip = (skip - 1) * limit;
    let result = await Project.find(filter)
      .populate(population)
      .limit(limit)
      .skip(numberSkip)
      .exec();

    return result;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
};
let updateAProject = async (data) => {
  try {
    let result = await Project.update(
      { _id: data.id },
      {
        name: data.name,
        endDate: data.endDate,
        description: data.description,
      }
    );
    return result;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
};
let deleteProject = async (data) => {
  try {
    let id = data.id;
    let result = await Project.deleteById({ _id: id });
    return result;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
};
module.exports = {
  CreateAProject,
  getProject,
  deleteProject,
  updateAProject,
};
