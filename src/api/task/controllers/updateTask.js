const TaskModel = require("../../../models/Task/Task");

// basically updating a single task's status and lastUpdated
const updateTask = async (req, res) => {
  try {
    const { lastUpdated, statusLevel } = req.body;

    const filter = { _id: req.params.id };

    const updatedTask = await TaskModel.findOneAndUpdate(
      filter,
      { lastUpdated, statusLevel: parseInt(statusLevel) },
      {
        new: true,
      }
    );

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

module.exports = updateTask;
