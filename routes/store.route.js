// get ,post,getByIds
const express = require("express")
const mongoose = require("mongoose")
const storeRoute = require("../controllers/store.controller")

const router = express.Router()


router.route('/')
    .get(storeRoute.getStore)
    .post(storeRoute.addStore)

router.route('/:id')
    .get(storeRoute.getStoreById)



