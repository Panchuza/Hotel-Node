const { request, response } = require('express');

const   huespedServicio   = require('../services/huesped');


const getHuesped = async (req, res) => {
    try {
        const huespedes = await huespedServicio.getHuesped();
        res.status(200).json(huespedes);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const getHuespedId = async (req, res) => {
    try {
        const huesped = await huespedServicio.getHuespedId(req.params.id);
        if (huesped) {
            res.status(200).json(huesped);
        } else {
            res.status(404).json({error: 'Huesped no encontrado para ese id'});
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const createHuesped = async(req = request, res = response) => {


    try {
        const huesped = await huespedServicio.createHuesped( req.body );
        res.status(201).json(huesped);
    } catch (err) {
        res.status(500).json({error: err.message});
    }

}

// const updateHuesped = async (req, res) => {
//     try {
//         const {Legajo} = req.body;
//         if (!Legajo) {
//             res.status(500).json({error: "Tiene que ingresar un legajo"});
//         }else{
//             const huesped = await huespedServicio.updateHuesped(req.params.id, req.body);
//             if (huesped) {
//                 const updatedhuesped = await huespedServicio.getHuespedId(req.params.id);
//                 res.status(200).json(updatedhuesped);
//             } else {
//                 res.status(404).json({error: 'huesped no existe'});
//             }
//         }
//     } catch (err) {
//         res.status(500).json({error: err.message});
//     }
// }



module.exports = {
    createHuesped,
    getHuesped,
    getHuespedId,
    // updateHuesped
}