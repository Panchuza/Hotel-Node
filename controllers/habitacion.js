const { request, response } = require('express');

const   habitacionServicio   = require('../services/habitacion');
const   habitacionTipoServicio   = require('../services/habitacion-tipo');
const   habitacionPrecioServicio   = require('../services/habitacion-precio');


const getHabitacion = async (req, res) => {
    try {
        const habitaciones = await habitacionServicio.getHabitacion();
        res.status(200).json(habitaciones);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const getHabitacionId = async (req, res) => {
    try {
        const habitacion = await habitacionServicio.getHabitacionId(req.params.id);
        if (habitacion) {
            res.status(200).json(habitacion);
        } else {
            res.status(404).json({error: 'Habitacion no encontrado para ese id'});
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const createHabitacion = async(req = request, res = response) => {

    try {
        const habitacion = await habitacionServicio.createHabitacion( req.body );
        res.status(201).json(habitacion);
    } catch (err) {
        res.status(500).json({error: err.message});
    }

}

const updateHabitacion = async (req, res) => {
    try {
        const {Numero} = req.body;
        if (!Numero) {
            res.status(500).json({error: "Tiene que ingresar un Numero"});
        }else{
            const habitacion = await habitacionServicio.updateHabitacion(req.params.id, req.body);
            if (habitacion) {
                const updatedHabitacion = await habitacionServicio.getHabitacionId(req.params.id);
                res.status(200).json(updatedHabitacion);
            } else {
                res.status(404).json({error: 'Habitacion no existe'});
            }
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}



module.exports = {
    createHabitacion,
    getHabitacion,
    getHabitacionId,
    updateHabitacion
}