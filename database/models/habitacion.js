'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Habitacion extends Model {
        static associate(models){
            Habitacion.belongsTo(models.HabitacionPrecio, {
                as: 'habitacionPrecio',
                foreignKey: 'HabitacionPrecioId'
            });
            Habitacion.belongsTo(models.HabitacionTipo, {
                as: 'habitacionTipo',
                foreignKey: 'HabitacionTipo'
            });
        }
    };
    Habitacion.init({
        Numero: {
            type: DataTypes.INTEGER,
        },
        HabitacionPrecioId: {
            type: DataTypes.INTEGER,
        },
        HabitacionTipo: {
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize,
        modelName: 'Habitacion',
    });
    return Habitacion;
};