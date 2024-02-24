const TaskModel = require("../../../models/Task/Task");

// basically updating a single task's status and lastUpdated
const editTask = async (req, res) => {
  try {
    const editData = req.body;

    let taskToEdit = await TaskModel.findById(req.params.id);
    Object.assign(taskToEdit, editData);

    const updatedTask = await taskToEdit.save();

    if (!updatedTask) {
      return res
        .status(404)
        .send({ status: "failed", message: "Task not updated" });
    }

    return res.send({ status: "success" });
  } catch (error) {
    console.error("Error updating task:", error);
    return res
      .status(500)
      .send({ status: "error", customErrMessage: error.message });
  }
};

module.exports = editTask;
