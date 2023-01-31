const express = require('express')
const router = express.Router()

const  habitacionTipoController  = require('../controllers/habitacion-tipo');


router
    .post('/', habitacionTipoController.createHabitacionTipo)
    .get('/', habitacionTipoController.getHabitacionTipo)
    .get('/:id', habitacionTipoController.getHabitacionTipoId)
    .put('/:id', habitacionTipoController.updateHabitacionTipo)

module.exports = router;