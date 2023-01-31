const  { HuespedEstadia } = require('../database/models');
const  { Huesped } = require('../database/models');
const  { Estadia } = require('../database/models');
const  { Persona } = require('../database/models');


const getHuespedEstadia = async () => {
    const huespedEstadia = await HuespedEstadia.findAll({ include: [{
        model: Huesped,
        as: 'huesped',
        include: [{
            model: Persona,
            as: 'persona',
            attributes: ['Nombre', 'Apellido', 'DNI']
        }],
        attributes: ['Id']
    }, {
        model: Estadia,
        as: 'estadia',
    }], attributes: ['Id', 'Titular']});
    return huespedEstadia;
}

const getHuespedEstadiaId = async (id) => {
    const huespedEstadia = await HuespedEstadia.findByPk(id);
    return huespedEstadia;
}

const createHuespedEstadia = async (huespedEstadia) => {
    const newHuespedEstadia = await HuespedEstadia.create( huespedEstadia );
    return newHuespedEstadia;
}

const updateHuespedEstadia = async (id, huespedEstadia) => {
    const updatedHuespedEstadia = await HuespedEstadia.update(huespedEstadia, {
        where: {
            id: id
        }
    });
    return updatedHuespedEstadia;
}

// const deletePersonaGenero = async (id) => {
//     const deletedPersonaGenero = await HuespedEstadia.destroy({
//         where: {
//             id: id
//         }
//     });
//     return deletedPersonaGenero;
// }

module.exports = {
    createHuespedEstadia,
    getHuespedEstadia,
    getHuespedEstadiaId,
    updateHuespedEstadia,
    // deletePersonaGenero
};