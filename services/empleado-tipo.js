const  { EmpleadoTipo } = require('../database/models');


const getEmpleadoTipo = async () => {
    const empleadoTipo = await EmpleadoTipo.findAll();
    return empleadoTipo;
}

const getEmpleadoTipoId = async (id) => {
    const empleadoTipo = await EmpleadoTipo.findByPk(id);
    return empleadoTipo;
}

const createEmpleadoTipo = async (empleadoTipo) => {
    const newEmpleadoTipo = await EmpleadoTipo.create( empleadoTipo );
    return newEmpleadoTipo;
}

const updateEmpleadoTipo = async (id, empleadoTipo) => {
    const updatedEmpleadoTipo = await EmpleadoTipo.update(empleadoTipo, {
        where: {
            id: id
        }
    });
    return updatedEmpleadoTipo;
}

// const deletePersonaGenero = async (id) => {
//     const deletedPersonaGenero = await EmpleadoTipo.destroy({
//         where: {
//             id: id
//         }
//     });
//     return deletedPersonaGenero;
// }

module.exports = {
    createEmpleadoTipo,
    getEmpleadoTipo,
    getEmpleadoTipoId,
    updateEmpleadoTipo,
    // deletePersonaGenero
};