const  { HabitacionTipo } = require('../database/models');


const getHabitacionTipo = async () => {
    const habitacionTipo = await HabitacionTipo.findAll();
    return habitacionTipo;
}

const getHabitacionTipoId = async (id) => {
    const habitacionTipo = await HabitacionTipo.findByPk(id);
    return habitacionTipo;
}

const createHabitacionTipo = async (habitacionTipo) => {
    const newHabitacionTipo = await HabitacionTipo.create( habitacionTipo );
    return newHabitacionTipo;
}

const updateHabitacionTipo = async (id, habitacionTipo) => {
    const updatedHabitacionTipo = await HabitacionTipo.update(habitacionTipo, {
        where: {
            id: id
        }
    });
    return updatedHabitacionTipo;
}

// const deletePersonaGenero = async (id) => {
//     const deletedPersonaGenero = await HabitacionTipo.destroy({
//         where: {
//             id: id
//         }
//     });
//     return deletedPersonaGenero;
// }

module.exports = {
    createHabitacionTipo,
    getHabitacionTipo,
    getHabitacionTipoId,
    updateHabitacionTipo,
    // deletePersonaGenero
};