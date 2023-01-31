const { request, response } = require('express');

const   habitacionPrecioServicio   = require('../services/habitacion-precio');


const getHabitacionPrecio = async (req, res) => {
    try {
        const habitacionPrecio = await habitacionPrecioServicio.getHabitacionPrecio();
        res.status(200).json(habitacionPrecio);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const getHabitacionPrecioId = async (req, res) => {
    try {
        const habitacionPrecio = await habitacionPrecioServicio.getHabitacionPrecioId(req.params.id);
        if (habitacionPrecio) {
            res.status(200).json(habitacionPrecio);
        } else {
            res.status(404).json({error: 'HabitacionPrecio no encontrado para ese id'});
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const createHabitacionPrecio = async(req = request, res = response) => {


    try {
        const habitacionPrecio = await habitacionPrecioServicio.createHabitacionPrecio( req.body );
        res.status(201).json(habitacionPrecio);
    } catch (err) {
        res.status(500).json({error: err.message});
    }

}

const updateHabitacionPrecio = async (req, res) => {
    try {
        const {Precio} = req.body;
        if (!Precio) {
            res.status(500).json({error: "Tiene que ingresar un Precio"});
        }else{
            const habitacionPrecio = await habitacionPrecioServicio.updateHabitacionPrecio(req.params.id, req.body);
            if (habitacionPrecio) {
                const updatedHabitacionPrecio = await habitacionPrecioServicio.getHabitacionPrecioId(req.params.id);
                res.status(200).json(updatedHabitacionPrecio);
            } else {
                res.status(404).json({error: 'HabitacionPrecio no existe'});
            }
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}



module.exports = {
    createHabitacionPrecio,
    getHabitacionPrecio,
    getHabitacionPrecioId,
    updateHabitacionPrecio
}