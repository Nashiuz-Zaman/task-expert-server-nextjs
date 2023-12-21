// imports
const express = require("express");

// controller
const sendEmail = require("./../../api/email/controllers/sendEmail");

// create router
const router = express.Router();

// routes
router.post("/send-email", sendEmail);

module.exports = router;
