const { request, response } = require('express');

const   empleadoServicio   = require('../services/empleado');


const getEmpleado = async (req, res) => {
    try {
        const empleados = await empleadoServicio.getEmpleado();
        res.status(200).json(empleados);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const getEmpleadoId = async (req, res) => {
    try {
        const empleado = await empleadoServicio.getEmpleadoId(req.params.id);
        if (empleado) {
            res.status(200).json(empleado);
        } else {
            res.status(404).json({error: 'Empleado no encontrado para ese id'});
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const createEmpleado = async(req = request, res = response) => {


    try {
        const empleado = await empleadoServicio.createEmpleado( req.body );
        res.status(201).json(empleado);
    } catch (err) {
        res.status(500).json({error: err.message});
    }

}

const updateEmpleado = async (req, res) => {
    try {
        const {Legajo} = req.body;
        if (!Legajo) {
            res.status(500).json({error: "Tiene que ingresar un legajo"});
        }else{
            const empleado = await empleadoServicio.updateEmpleado(req.params.id, req.body);
            if (empleado) {
                const updatedEmpleado = await empleadoServicio.getEmpleadoId(req.params.id);
                res.status(200).json(updatedEmpleado);
            } else {
                res.status(404).json({error: 'Empleado no existe'});
            }
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}



module.exports = {
    createEmpleado,
    getEmpleado,
    getEmpleadoId,
    updateEmpleado
}