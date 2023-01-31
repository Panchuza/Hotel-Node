const express = require('express')
const router = express.Router()

const  medioPagoController  = require('../controllers/medio-pago');


router
    .post('/', medioPagoController.createMedioPago)
    .get('/', medioPagoController.getMedioPago)
    .get('/:id', medioPagoController.getMedioPagoId)
    .put('/:id', medioPagoController.updateMedioPago)

module.exports = router;