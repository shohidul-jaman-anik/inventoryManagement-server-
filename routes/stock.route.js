const express = require('express')
const router = express.Router()
const stockController = require('../controllers/stock.controller')



router.route('/bulk-update').patch(stockController.bulkUpdatestocks)
router.route('/bulk-delete').delete(stockController.bulkDeleteStocks)


router.route('/')
    .get(stockController.getStocks)
    .post(stockController.addStock)

router.route('/:id')
    .patch(stockController.updateStock)
    .delete(stockController.deleteStock)

module.exports = router;
