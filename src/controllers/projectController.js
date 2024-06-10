const {
  CreateAProject,
  getProject,
  deleteProject,
  updateAProject,
} = require("../services/projectService");

let postCreateProject = async (req, res) => {
  let result = await CreateAProject(req.body);
  return res.status(200).json({
    errCode: 0,
    data: result,
  });
};

let getAllProject = async (req, res) => {
  let result = await getProject(req.query);
  return res.status(200).json({
    errCode: 0,
    data: result,
  });
};

let putUpdateProject = async (req, res) => {
  let result = await updateAProject(req.body);
  return res.status(200).json({
    errCode: 0,
    data: result,
  });
};

let deleteAProject = async (req, res) => {
  let result = await deleteProject(req.body);
  return res.status(200).json({
    errCode: 0,
    data: result,
  });
};

module.exports = {
  postCreateProject,
  getAllProject,
  putUpdateProject,
  deleteAProject,
};
