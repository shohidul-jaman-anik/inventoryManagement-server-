const express = require('express')
const router = express.Router()
const productController = require('../controllers/product.controller')

router.route('/')
    .get(productController.getProducts)
    .post(productController.addProduct)

router.route('/:id')
    .patch(productController.updateProduct)
    .delete()

module.exports = router;
