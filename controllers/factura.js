const { request, response } = require('express');

const   facturaServicio   = require('../services/factura');


const getFactura = async (req, res) => {
    try {
        const facturas = await facturaServicio.getFactura();
        res.status(200).json(facturas);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const getFacturaId = async (req, res) => {
    try {
        const factura = await facturaServicio.getFacturaId(req.params.id);
        if (factura) {
            res.status(200).json(factura);
        } else {
            res.status(404).json({error: 'Factura no encontrado para ese id'});
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const createFactura = async(req = request, res = response) => {


    try {
        const factura = await facturaServicio.createFactura( req.body );
        res.status(201).json(factura);
    } catch (err) {
        res.status(500).json({error: err.message});
    }

}

const updateFactura = async (req, res) => {
    try {
        const {Monto} = req.body;
        if (!Monto) {
            res.status(500).json({error: "Tiene que ingresar un Monto"});
        }else{
            const factura = await facturaServicio.updateFactura(req.params.id, req.body);
            if (factura) {
                const updatedFactura = await facturaServicio.getFacturaId(req.params.id);
                res.status(200).json(updatedFactura);
            } else {
                res.status(404).json({error: 'factura no existe'});
            }
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}



module.exports = {
    createFactura,
    getFactura,
    getFacturaId,
    updateFactura
}