const  { Huesped } = require('../database/models');


const getHuesped = async () => {
    const huesped = await Huesped.findAll({ include: { association: 'Persona', attributes: ['Nombre', 'Apellido', 'DNI'] },
    attributes: ['Id']});
    return huesped;
}

const getHuespedId = async (id) => {
    const huesped = await Huesped.findByPk(id);
    return huesped;
}

const createHuesped = async (huesped) => {
    const newHuesped = await Huesped.create( huesped );
    return newHuesped;
}

const updateHuesped = async (id, huesped) => {
    const updatedHuesped = await Huesped.update(huesped, {
        where: {
            id: id
        }
    });
    return updatedHuesped;
}

// const deletePersonaGenero = async (id) => {
//     const deletedPersonaGenero = await Huesped.destroy({
//         where: {
//             id: id
//         }
//     });
//     return deletedPersonaGenero;
// }

module.exports = {
    createHuesped,
    getHuesped,
    getHuespedId,
    updateHuesped,
    // deletePersonaGenero
};