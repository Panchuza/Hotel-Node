const  { Persona } = require('../database/models');



const getPersona = async () => {
    const persona = await Persona.findAll({ include: { association: 'personaGenero', attributes: ['Nombre'] },
    attributes: ['Nombre', 'Apellido', 'DNI', 'FechaDeNacimiento', 'Telefono', 'Email']});
    return persona;
}

const getPersonaId = async (id) => {
    const persona = await Persona.findByPk(id);
    return persona;
}

const createPersona = async (persona) => {
    const newPersona = await Persona.create( persona );
    return newPersona;
}

// const deletePersonaGenero = async (id) => {
//         const persona = await Persona.findByPk(id);

//         await Persona.destroy({
//             where: {id}
//         });

//         const { filename } = persona;
//         const filePath = `${MEDIA_PATH}/${filename}`;

//         fs.unlinkSync(filePath); 
//         const data = {
//             filePath,
//             deleted: 1
//         }
//     return data;
// }

module.exports = {
    getPersona,
    getPersonaId,
    createPersona,
    // deletePersonaGenero
};