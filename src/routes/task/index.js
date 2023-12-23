// imports
const express = require("express");

// controller
const getTasks = require("./../../api/task/controllers/getTasks");
const updateTask = require("./../../api/task/controllers/updateTask");

// create router
const router = express.Router();

// routes
router.get("/tasks", getTasks);
router.patch("/tasks/update/:id", updateTask);

module.exports = router;
