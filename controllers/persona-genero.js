const { request, response } = require('express');

const   personaGeneroServicio   = require('../services/persona-genero');


const getPersonaGenero = async (req, res) => {
    try {
        const personasGenero = await personaGeneroServicio.getPersonaGenero();
        res.status(200).json(personasGenero);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const getPersonaGeneroId = async (req, res) => {
    try {
        const persona = await personaGeneroServicio.getPersonaGeneroId(req.params.id);
        if (persona) {
            res.status(200).json(persona);
        } else {
            res.status(404).json({error: 'Persona no encontrada para ese id'});
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const createPersonaGenero = async(req = request, res = response) => {


    try {
        const personaGenero = await personaGeneroServicio.createPersonaGenero( req.body );
        res.status(201).json(personaGenero);
    } catch (err) {
        res.status(500).json({error: err.message});
    }

}

const updatePersonaGenero = async (req, res) => {
    try {
        const {Nombre} = req.body;
        if (!Nombre) {
            res.status(500).json({error: "Tiene que ingresar un nombre"});
        }else{
            const personaGenero = await personaGeneroServicio.updatePersonaGenero(req.params.id, req.body);
            if (personaGenero) {
                const updatedPersonaGenero = await personaGeneroServicio.getPersonaGeneroId(req.params.id);
                res.status(200).json(updatedPersonaGenero);
            } else {
                res.status(404).json({error: 'PersonaGenero no existe'});
            }
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}



module.exports = {
    createPersonaGenero,
    getPersonaGenero,
    getPersonaGeneroId,
    updatePersonaGenero
}