const TaskModel = require("../../../models/Task/Task");

// basically updating a single task's status and lastUpdated
const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const newTaskData = req.body;
    console.log(id);
    console.log(newTaskData);
    const filter = { _id: id };

    const updatedTask = await TaskModel.findOneAndUpdate(filter, newTaskData, {
      new: true,
    });

    if (!updatedTask) {
      return res
        .status(404)
        .send({ success: false, message: "Task not found" });
    }

    const sortOption = { lastUpdated: 1 };
    const newTasks = await TaskModel.find().sort(sortOption);

    return res.send({ success: true, updatedTasks: newTasks });
  } catch (error) {
    console.error("Error updating task:", error);
    return res
      .status(500)
      .send({ success: false, error: "Internal Server Error" });
  }
};

module.exports = updateTask;
