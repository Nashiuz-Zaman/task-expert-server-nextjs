// imports
const express = require("express");

// controller
const getTasks = require("./../../api/task/controllers/getTasks");
const updateTask = require("./../../api/task/controllers/updateTask");
const deleteTask = require("../../api/task/controllers/deleteTask");

// create router
const router = express.Router();

// routes
router.get("/tasks", getTasks);
router.patch("/tasks/update/:id", updateTask);
router.delete("/tasks/delete/:id", deleteTask);

module.exports = router;
