// imports
const express = require("express");

// controller
const getTasks = require("./../../api/task/controllers/getTasks");

// create router
const router = express.Router();

// routes
router.get("/tasks", getTasks);

module.exports = router;
