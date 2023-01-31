const  { Habitacion } = require('../database/models');
const  { HabitacionTipo } = require('../database/models');
const  { HabitacionPrecio } = require('../database/models');


const getHabitacion = async () => {
    const habitacion = await Habitacion.findAll({ include: [{
        model: HabitacionTipo,
        as: 'habitacionTipo',
        attributes: ['Nombre']
    }, {
        model: HabitacionPrecio,
        as: 'habitacionPrecio',
        attributes: ['Precio']
    }], attributes: ['Id', 'Numero']});
    return habitacion;
}

const getHabitacionId = async (id) => {
    const habitacion = await Habitacion.findByPk(id);
    return habitacion;
}

const createHabitacion = async (habitacion) => {
    const newHabitacion = await Habitacion.create( habitacion );
    return newHabitacion;
}

const updateHabitacion = async (id, habitacion) => {
    const updatedHabitacion = await Habitacion.update(habitacion, {
        where: {
            id: id
        }
    });
    return updatedHabitacion;
}

// const deletePersonaGenero = async (id) => {
//     const deletedPersonaGenero = await Habitacion.destroy({
//         where: {
//             id: id
//         }
//     });
//     return deletedPersonaGenero;
// }

module.exports = {
    createHabitacion,
    getHabitacion,
    getHabitacionId,
    updateHabitacion,
    // deletePersonaGenero
};