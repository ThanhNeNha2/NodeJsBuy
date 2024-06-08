const { CreateAProject } = require("../services/projectService");

let postCreateProject = async (req, res) => {
  let result = await CreateAProject(req.body);
  return res.status(200).json({
    errCode: 0,
    data: result,
  });
};
module.exports = {
  postCreateProject,
};
