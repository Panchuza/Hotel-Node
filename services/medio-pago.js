const  { MedioPago } = require('../database/models');


const getMedioPago = async () => {
    const medioPago = await MedioPago.findAll();
    return medioPago;
}

const getMedioPagoId = async (id) => {
    const medioPago = await MedioPago.findByPk(id);
    return medioPago;
}

const createMedioPago = async (medioPago) => {
    const newMedioPago = await MedioPago.create( medioPago );
    return newMedioPago;
}

const updateMedioPago = async (id, medioPago) => {
    const updatedMedioPago = await MedioPago.update(medioPago, {
        where: {
            id: id
        }
    });
    return updatedMedioPago;
}

// const deletePersonaGenero = async (id) => {
//     const deletedPersonaGenero = await MedioPago.destroy({
//         where: {
//             id: id
//         }
//     });
//     return deletedPersonaGenero;
// }

module.exports = {
    createMedioPago,
    getMedioPago,
    getMedioPagoId,
    updateMedioPago,
    // deletePersonaGenero
};