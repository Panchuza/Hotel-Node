const { request, response } = require('express');

const   huespedEstadiaServicio   = require('../services/huesped-estadia');


const getHuespedEstadia = async (req, res) => {
    try {
        const huespedEstadia = await huespedEstadiaServicio.getHuespedEstadia();
        res.status(200).json(huespedEstadia);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const getHuespedEstadiaId = async (req, res) => {
    try {
        const huespedEstadia = await huespedEstadiaServicio.getHuespedEstadiaId(req.params.id);
        if (huespedEstadia) {
            res.status(200).json(huespedEstadia);
        } else {
            res.status(404).json({error: 'HuespedEstadia no encontrado para ese id'});
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const createHuespedEstadia = async(req = request, res = response) => {


    try {
        const huespedEstadia = await huespedEstadiaServicio.createHuespedEstadia( req.body );
        res.status(201).json(huespedEstadia);
    } catch (err) {
        res.status(500).json({error: err.message});
    }

}

const updateHuespedEstadia = async (req, res) => {
    try {
        const {Titular} = req.body;
        if (!Titular) {
            res.status(500).json({error: "Tiene que ingresar un titular"});
        }else{
            const huespedEstadia = await huespedEstadiaServicio.updateHuespedEstadia(req.params.id, req.body);
            if (huespedEstadia) {
                const updatedhuesped = await huespedEstadiaServicio.getHuespedEstadiaId(req.params.id);
                res.status(200).json(updatedhuesped);
            } else {
                res.status(404).json({error: 'huespedEstadia no existe'});
            }
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}



module.exports = {
    createHuespedEstadia,
    getHuespedEstadia,
    getHuespedEstadiaId,
    updateHuespedEstadia
}