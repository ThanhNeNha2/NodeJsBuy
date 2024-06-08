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
  } catch (error) {
    console.log("ERROR >>> ", error);
    return null;
  }
};
module.exports = {
  CreateAProject,
};
