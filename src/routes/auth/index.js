// imports
const express = require("express");
const emailLoginAuthCheck = require("../../api/auth/controllers/emailLoginAuthCheck");
const googleLoginAuthCheck = require("../../api/auth/controllers/googleLoginAuthCheck");

// create router
const router = express.Router();

// routes
router.post("/login", emailLoginAuthCheck);

router.post("/google-login", googleLoginAuthCheck);

module.exports = router;
