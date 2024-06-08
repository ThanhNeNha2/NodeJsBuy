const Project = require("../models/project");

let CreateAProject = async (data) => {
  try {
    if (data.type === "EMPTY-PROJECT") {
      let result = await Project.create(data);
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
