const express = require('express')
const router = express.Router()
const productController = require('../controllers/product.controller')


router.route('/bulk-update').patch(productController.bulkUpdateProduct)
router.route('/bulk-delete').delete(productController.bulkUpdateProduct)

router.route('/')
    .get(productController.getProducts)
    .post(productController.addProduct)

router.route('/:id')
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct)

module.exports = router;
