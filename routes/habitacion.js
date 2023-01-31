const express = require('express')
const router = express.Router()

const  habitacionController  = require('../controllers/habitacion');


router
    .post('/', habitacionController.createHabitacion)
    .get('/', habitacionController.getHabitacion)
    .get('/:id', habitacionController.getHabitacionId)
    .put('/:id', habitacionController.updateHabitacion)

module.exports = router;