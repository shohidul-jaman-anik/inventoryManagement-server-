const express = require("express")
const router = express.Router()
const supplierRoute=require("../controllers/supplier.controller")

router.route('/')
    .get(supplierRoute.getSupplier)
    .post(supplierRoute.addSupplier)

router.route('/:id')
    .get(supplierRoute.updateSupplier)


module.exports = router;