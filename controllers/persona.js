const { request, response } = require('express');

const personaServicio = require('../services/persona');

const createPersona = async(req = request, res = response) => {

    try {
        const persona = await personaServicio.createPersona( req.body );
        res.status(201).json(persona);
    } catch (err) {
        res.status(500).json({msg: 'Error en el cath' });
    }

}

const getPersona = async (req, res) => {
    try {
        const personas = await personaServicio.getPersona();
        res.status(200).json(personas);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const getPersonaId = async (req, res) => {
    try {
        const persona = await personaServicio.getPersonaId(req.params.id);
        if (persona) {
            res.status(200).json(persona);
        } else {
            res.status(404).json({error: 'Persona no encontrada para ese id'});
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const updatePersona = async (req, res) => {
    try {
        const {Nombre} = req.body;
        if (!Nombre) {
            res.status(500).json({error: "Tiene que ingresar un nombre"});
        }else{
            const persona = await personaServicio.updatePersona(req.params.id, req.body);
            if (persona) {
                const updatedPersona = await personaServicio.getPersonaId(req.params.id);
                res.status(200).json(updatedPersona);
            } else {
                res.status(404).json({error: 'Persona no existe'});
            }
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}


module.exports = {
    createPersona,
    getPersona,
    getPersonaId,
    updatePersona
}