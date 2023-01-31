const express = require('express')
const router = express.Router()

const  huespedController  = require('../controllers/huesped');


router
    .post('/', huespedController.createHuesped)
    .get('/', huespedController.getHuesped)
    .get('/:id', huespedController.getHuespedId)
    // .put('/:id', huespedController.updateHuesped)

module.exports = router;