const  { Estadia } = require('../database/models');


const getEstadia = async () => {
    const estadia = await Estadia.findAll({ include: { association: 'habitacion', attributes: ['Numero'] },
    attributes: ['Id', 'FechaInicioPlanificada', 'FechaFinPlanificada']});
    return estadia;
}

const getEstadiaId = async (id) => {
    const estadia = await Estadia.findByPk(id);
    return estadia;
}

const createEstadia = async (estadia) => {
    const newEstadia = await Estadia.create( estadia );
    return newEstadia;
}

const updateEstadia = async (id, estadia) => {
    const updatedEstadia = await Estadia.update(estadia, {
        where: {
            id: id
        }
    });
    return updatedEstadia;
}

// const deletePersonaGenero = async (id) => {
//     const deletedPersonaGenero = await Estadia.destroy({
//         where: {
//             id: id
//         }
//     });
//     return deletedPersonaGenero;
// }

module.exports = {
    createEstadia,
    getEstadia,
    getEstadiaId,
    updateEstadia,
    // deletePersonaGenero
};