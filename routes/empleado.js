const express = require('express')
const router = express.Router()

const  empleadoController  = require('../controllers/empleado');


router
    .post('/', empleadoController.createEmpleado)
    .get('/', empleadoController.getEmpleado)
    .get('/:id', empleadoController.getEmpleadoId)
    .put('/:id', empleadoController.updateEmpleado)

module.exports = router;