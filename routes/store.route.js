// get ,post,getByIds
const express = require("express")
const router = express.Router()
const storeRoute = require("../controllers/store.controller")


router.route('/')
    .get(storeRoute.getStore)
    .post(storeRoute.addStore)

router.route('/:id')
    .get(storeRoute.getStoreById)


module.exports = router;
