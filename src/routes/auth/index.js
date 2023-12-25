// imports
const express = require("express");
const authCheck = require("../../api/auth/controllers/authCheck");
const googleAuthCheck = require("../../api/auth/controllers/googleAuthCheck");

// create router
const router = express.Router();

// routes
router.post("/login", authCheck);

router.post("/google-login", googleAuthCheck);

module.exports = router;
