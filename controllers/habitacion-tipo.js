const { request, response } = require('express');

const   habitacionTipoServicio   = require('../services/habitacion-tipo');


const getHabitacionTipo = async (req, res) => {
    try {
        const habitacionTipo = await habitacionTipoServicio.getHabitacionTipo();
        res.status(200).json(habitacionTipo);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const getHabitacionTipoId = async (req, res) => {
    try {
        const habitacionTipo = await habitacionTipoServicio.getHabitacionTipoId(req.params.id);
        if (habitacionTipo) {
            res.status(200).json(habitacionTipo);
        } else {
            res.status(404).json({error: 'HabitacionTipo no encontrado para ese id'});
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const createHabitacionTipo = async(req = request, res = response) => {


    try {
        const habitacionTipo = await habitacionTipoServicio.createHabitacionTipo( req.body );
        res.status(201).json(habitacionTipo);
    } catch (err) {
        res.status(500).json({error: err.message});
    }

}

const updateHabitacionTipo = async (req, res) => {
    try {
        const {Nombre} = req.body;
        if (!Nombre) {
            res.status(500).json({error: "Tiene que ingresar un Nombre"});
        }else{
            const habitacionTipo = await habitacionTipoServicio.updateHabitacionTipo(req.params.id, req.body);
            if (habitacionTipo) {
                const updatedHabitacionTipo = await habitacionTipoServicio.getHabitacionTipoId(req.params.id);
                res.status(200).json(updatedHabitacionTipo);
            } else {
                res.status(404).json({error: 'HabitacionTipo no existe'});
            }
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}



module.exports = {
    createHabitacionTipo,
    getHabitacionTipo,
    getHabitacionTipoId,
    updateHabitacionTipo
}