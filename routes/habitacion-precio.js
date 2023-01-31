const express = require('express')
const router = express.Router()

const  habitacionPrecioController  = require('../controllers/habitacion-precio');


router
    .post('/', habitacionPrecioController.createHabitacionPrecio)
    .get('/', habitacionPrecioController.getHabitacionPrecio)
    .get('/:id', habitacionPrecioController.getHabitacionPrecioId)
    .put('/:id', habitacionPrecioController.updateHabitacionPrecio)

module.exports = router;