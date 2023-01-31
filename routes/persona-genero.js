const express = require('express')
const router = express.Router()

const  personaGeneroController  = require('../controllers/persona-genero');


router
    .post('/', personaGeneroController.createPersonaGenero)
    .get('/', personaGeneroController.getPersonaGenero)
    .get('/:id', personaGeneroController.getPersonaGeneroId)
    .put('/:id', personaGeneroController.updatePersonaGenero)

module.exports = router;