const  { Empleado } = require('../database/models');
const  { Persona } = require('../database/models');
const  { EmpleadoTipo } = require('../database/models');


const getEmpleado = async () => {
    const empleado = await Empleado.findAll({ include: [{
        model: Persona,
        as: 'persona',
        attributes: ['Nombre', 'Apellido', 'DNI']
    }, {
        model: EmpleadoTipo,
        as: 'empleadoTipo',
        attributes: ['Nombre']
    }], attributes: ['Id', 'Legajo', 'FechaEntrada', 'FechaSalida', 'EmailLaboral', 'Password']});
    return empleado;
}

const getEmpleadoId = async (id) => {
    const empleado = await Empleado.findByPk(id);
    return empleado;
}

const createEmpleado = async (empleado) => {
    const newEmpleado = await Empleado.create( empleado );
    return newEmpleado;
}

const updateEmpleado = async (id, empleado) => {
    const updatedEmpleado = await Empleado.update(empleado, {
        where: {
            id: id
        }
    });
    return updatedEmpleado;
}

// const deletePersonaGenero = async (id) => {
//     const deletedPersonaGenero = await Empleado.destroy({
//         where: {
//             id: id
//         }
//     });
//     return deletedPersonaGenero;
// }

module.exports = {
    createEmpleado,
    getEmpleado,
    getEmpleadoId,
    updateEmpleado,
    // deletePersonaGenero
};