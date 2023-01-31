'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class HabitacionTipo extends Model {
        static associate(models){
            HabitacionTipo.hasMany(models.Habitacion, {
                as: 'habitacion',
                foreignKey: 'HabitacionTipo'
            });
        }
    };
    HabitacionTipo.init({
        Nombre: {
            type: DataTypes.STRING,
        },
    }, {
        sequelize,
        modelName: 'HabitacionTipo',
    });
    return HabitacionTipo;
};