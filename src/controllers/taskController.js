const {
  CreateATask,
  getTask,
  deleteTask,
  updateATask,
} = require("../services/taskService");

let postCreateTask = async (req, res) => {
  let result = await CreateATask(req.body);
  return res.status(200).json({
    errCode: 0,
    data: result,
  });
};

let getAllTask = async (req, res) => {
  let result = await getTask(req.query);
  return res.status(200).json({
    errCode: 0,
    data: result,
  });
};

let putUpdateTask = async (req, res) => {
  let result = await updateATask(req.body);
  return res.status(200).json({
    errCode: 0,
    data: result,
  });
};

let deleteATask = async (req, res) => {
  let result = await deleteTask(req.body);
  return res.status(200).json({
    errCode: 0,
    data: result,
  });
};

module.exports = {
  postCreateTask,
  getAllTask,
  putUpdateTask,
  deleteATask,
};
