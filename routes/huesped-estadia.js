const express = require('express')
const router = express.Router()

const  huespedEstadiaController  = require('../controllers/huesped-estadia');


router
    .post('/', huespedEstadiaController.createHuespedEstadia)
    .get('/', huespedEstadiaController.getHuespedEstadia)
    .get('/:id', huespedEstadiaController.getHuespedEstadiaId)
    // .put('/:id', huespedEstadiaController.updateHuespedEstadia)

module.exports = router;