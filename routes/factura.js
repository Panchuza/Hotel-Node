const express = require('express')
const router = express.Router()

const  facturaController  = require('../controllers/factura');


router
    .post('/', facturaController.createFactura)
    .get('/', facturaController.getFactura)
    .get('/:id', facturaController.getFacturaId)
    .put('/:id', facturaController.updateFactura)

module.exports = router;