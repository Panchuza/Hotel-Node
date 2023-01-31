const express = require('express')
const router = express.Router()

const  estadiaController  = require('../controllers/estadia');


router
    .post('/', estadiaController.createEstadia)
    .get('/', estadiaController.getEstadia)
    .get('/:id', estadiaController.getEstadiaId)
    .put('/:id', estadiaController.updateEstadia)

module.exports = router;