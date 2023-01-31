const express = require('express');
const router = express.Router();

const personaController = require('../controllers/persona');

router
    .post('/', personaController.createPersona)
    .get('/', personaController.getPersona)
    .get('/:id', personaController.getPersonaId)





    
module.exports = router;