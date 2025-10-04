const express = require("express");
const { checkout } = require("../controllers/checkoutController");

const router = express.Router();

// POST /api/checkout
router.post("/", checkout);

module.exports = router;
