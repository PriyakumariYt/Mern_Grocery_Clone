// const express = require('express')
// const router = express.Router()
// const authMiddleware = require("../middleware/auth-middleware")
// const processPayment = require("../Controllers/payment-controllers")
// router.route("/payment").post(authMiddleware,processPayment)
// module.exports = router
const express = require('express');
const router = express.Router();
const authMiddleware = require("../middleware/auth-middleware");
const processPayment = require("../Controllers/payment-controllers");

router.route("/payment").post(authMiddleware,processPayment);

module.exports = router;
