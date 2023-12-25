// imports
const express = require("express");
const createUser = require("../../api/user/controllers/createUser");
const checkUser = require("../../api/user/controllers/checkUser");

// create router
const router = express.Router();

// routes
router.post("/users", createUser);
router.post("/users/checkExistence", checkUser);

module.exports = router;
