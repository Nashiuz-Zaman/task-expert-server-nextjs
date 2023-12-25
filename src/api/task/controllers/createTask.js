const TaskModel = require("./../../../models/Task/Task");

const createTask = async (req, res) => {
  try {
    const newTask = req.body;
    const filter = { email: newTask.email };
    // create task
    const newCreatedTask = await TaskModel.create(newTask);

    if (newCreatedTask._id) {
      // set the sorting order
      const sortOption = { lastUpdated: 1 };
      const tasks = await TaskModel.find(filter).sort(sortOption);
      return res.send({ success: true, updatedTasks: tasks });
    }
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return res
      .status(500)
      .send({ success: false, error: "Internal Server Error" });
  }
};

module.exports = createTask;
