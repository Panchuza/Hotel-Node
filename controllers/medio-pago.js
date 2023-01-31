const { request, response } = require('express');

const   medioPagoServicio   = require('../services/medio-pago');


const getMedioPago = async (req, res) => {
    try {
        const medioPago = await medioPagoServicio.getMedioPago();
        res.status(200).json(medioPago);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const getMedioPagoId = async (req, res) => {
    try {
        const medioPago = await medioPagoServicio.getMedioPagoId(req.params.id);
        if (medioPago) {
            res.status(200).json(medioPago);
        } else {
            res.status(404).json({error: 'MedioPago no encontrado para ese id'});
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const createMedioPago = async(req = request, res = response) => {


    try {
        const medioPago = await medioPagoServicio.createMedioPago( req.body );
        res.status(201).json(medioPago);
    } catch (err) {
        res.status(500).json({error: err.message});
    }

}

const updateMedioPago = async (req, res) => {
    try {
        const {Nombre} = req.body;
        if (!Nombre) {
            res.status(500).json({error: "Tiene que ingresar un Nombre"});
        }else{
            const medioPago = await medioPagoServicio.updateMedioPago(req.params.id, req.body);
            if (medioPago) {
                const updatedMedioPago = await medioPagoServicio.getMedioPagoId(req.params.id);
                res.status(200).json(updatedMedioPago);
            } else {
                res.status(404).json({error: 'MedioPago no existe'});
            }
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}



module.exports = {
    createMedioPago,
    getMedioPago,
    getMedioPagoId,
    updateMedioPago
}