const mongoose_delete = require("mongoose-delete");
const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
});

const projectSchema = new mongoose.Schema({
  name: String,
  startDate: String,
  endDate: String,
  description: String,
});
const taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    status: String,
    startDate: String,
    endDate: String,

    usersInfor: userSchema,
    projectInfo: projectSchema,
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);
taskSchema.plugin(mongoose_delete, { overrideMethods: true });
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
