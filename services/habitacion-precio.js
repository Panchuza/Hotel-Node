const  { HabitacionPrecio } = require('../database/models');


const getHabitacionPrecio = async () => {
    const habitacionPrecio = await HabitacionPrecio.findAll();
    return habitacionPrecio;
}

const getHabitacionPrecioId = async (id) => {
    const habitacionPrecio = await HabitacionPrecio.findByPk(id);
    return habitacionPrecio;
}

const createHabitacionPrecio = async (habitacionPrecio) => {
    const newHabitacionPrecio = await HabitacionPrecio.create( habitacionPrecio );
    return newHabitacionPrecio;
}

const updateHabitacionPrecio = async (id, habitacionPrecio) => {
    const updatedHabitacionPrecio = await HabitacionPrecio.update(habitacionPrecio, {
        where: {
            id: id
        }
    });
    return updatedHabitacionPrecio;
}

// const deletePersonaGenero = async (id) => {
//     const deletedPersonaGenero = await HabitacionPrecio.destroy({
//         where: {
//             id: id
//         }
//     });
//     return deletedPersonaGenero;
// }

module.exports = {
    createHabitacionPrecio,
    getHabitacionPrecio,
    getHabitacionPrecioId,
    updateHabitacionPrecio,
    // deletePersonaGenero
};