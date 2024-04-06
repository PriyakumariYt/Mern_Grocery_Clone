const express = require('express')
const router = express.Router()
const products = require("../Controllers/product-controller")
router.route("/product").get(products)
module.exports = router