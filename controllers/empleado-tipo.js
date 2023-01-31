const { request, response } = require('express');

const   empleadoTipoServicio   = require('../services/empleado-tipo');


const getEmpleadoTipo = async (req, res) => {
    try {
        const empleadoTipo = await empleadoTipoServicio.getEmpleadoTipo();
        res.status(200).json(empleadoTipo);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const getEmpleadoTipoId = async (req, res) => {
    try {
        const empleadoTipo = await empleadoTipoServicio.getEmpleadoTipoId(req.params.id);
        if (empleadoTipo) {
            res.status(200).json(empleadoTipo);
        } else {
            res.status(404).json({error: 'EmpleadoTipo no encontrado para ese id'});
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const createEmpleadoTipo = async(req = request, res = response) => {


    try {
        const empleadoTipo = await empleadoTipoServicio.createEmpleadoTipo( req.body );
        res.status(201).json(empleadoTipo);
    } catch (err) {
        res.status(500).json({error: err.message});
    }

}

const updateEmpleadoTipo = async (req, res) => {
    try {
        const {Nombre} = req.body;
        if (!Nombre) {
            res.status(500).json({error: "Tiene que ingresar un nombre"});
        }else{
            const empleadoTipo = await empleadoTipoServicio.updateEmpleadoTipo(req.params.id, req.body);
            if (empleadoTipo) {
                const updatedEmpleadoTipo = await empleadoTipoServicio.getEmpleadoTipoId(req.params.id);
                res.status(200).json(updatedEmpleadoTipo);
            } else {
                res.status(404).json({error: 'EmpleadoTipo no existe'});
            }
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}



module.exports = {
    createEmpleadoTipo,
    getEmpleadoTipo,
    getEmpleadoTipoId,
    updateEmpleadoTipo
}