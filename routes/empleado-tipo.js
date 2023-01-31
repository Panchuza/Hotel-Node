const express = require('express')
const router = express.Router()

const  empleadoTipoController  = require('../controllers/empleado-tipo');


router
    .post('/', empleadoTipoController.createEmpleadoTipo)
    .get('/', empleadoTipoController.getEmpleadoTipo)
    .get('/:id', empleadoTipoController.getEmpleadoTipoId)
    .put('/:id', empleadoTipoController.updateEmpleadoTipo)

module.exports = router;