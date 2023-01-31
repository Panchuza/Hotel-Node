const { request, response } = require('express');

const   estadiaServicio   = require('../services/estadia');
const   habitacionServicio   = require('../services/habitacion');


const getEstadia = async (req, res) => {
    try {
        const estadias = await estadiaServicio.getEstadia();
        res.status(200).json(estadias);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const getEstadiaId = async (req, res) => {
    try {
        const estadia = await estadiaServicio.getEstadiaId(req.params.id);
        if (estadia) {
            res.status(200).json(estadia);
        } else {
            res.status(404).json({error: 'Estadia no encontrado para ese id'});
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const createEstadia = async(req = request, res = response) => {

    try {
        // const { HabitacionId } = req.body;
        // const { Habitacion } = habitacionServicio.getHabitacionId( HabitacionId );
        // if( !Habitacion ){
        //     res.status(404).json({error: 'Habitacion no encontrada para ese id'});
        // } else {
        //     const estadia = await estadiaServicio.createEstadia( req.body );
        //     res.status(201).json(estadia);
        // }
        const estadia = await estadiaServicio.createEstadia( req.body );
        res.status(201).json(estadia);
    } catch (err) {
        res.status(500).json({error: err.message});
    }

}

const updateEstadia = async (req, res) => {
    try {
        const {FechaInicioPlanificada, FechaFinPlanificada} = req.body;
        if (!FechaInicioPlanificada || !FechaFinPlanificada) {
            res.status(500).json({error: "Tiene que ingresar una Fecha de Inicio o de Fin"});
        }else{
            const estadia = await estadiaServicio.updateEstadia(req.params.id, req.body);
            if (estadia) {
                const updatedEstadia = await estadiaServicio.getEstadiaId(req.params.id);
                res.status(200).json(updatedEstadia);
            } else {
                res.status(404).json({error: 'estadia no existe'});
            }
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

module.exports = {
    createEstadia,
    getEstadia,
    getEstadiaId,
    updateEstadia
}