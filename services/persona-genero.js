const  { PersonaGenero } = require('../database/models');


const getPersonaGenero = async () => {
    const personasGenero = await PersonaGenero.findAll({ include: { association: 'persona', attributes: ['id', 'Nombre', 'Apellido'] }
    , attributes: ['Nombre'] } );
    return personasGenero;
}

const getPersonaGeneroId = async (id) => {
    const personaGenero = await PersonaGenero.findByPk(id);
    return personaGenero;
}

const createPersonaGenero = async (personaGenero) => {
    const newPersonaGenero = await PersonaGenero.create( personaGenero );
    return newPersonaGenero;
}

const updatePersonaGenero = async (id, personaGenero) => {
    const updatedPersonaGenero = await PersonaGenero.update(personaGenero, {
        where: {
            id: id
        }
    });
    return updatedPersonaGenero;
}

// const deletePersonaGenero = async (id) => {
//     const deletedPersonaGenero = await PersonaGenero.destroy({
//         where: {
//             id: id
//         }
//     });
//     return deletedPersonaGenero;
// }

module.exports = {
    createPersonaGenero,
    getPersonaGenero,
    getPersonaGeneroId,
    updatePersonaGenero,
    // deletePersonaGenero
};