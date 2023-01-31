'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Estadia extends Model {
        static associate(models){
            Estadia.belongsTo(models.Habitacion, {
                as: 'habitacion',
                foreignKey: 'HabitacionId'
            });
        };
    };
    Estadia.init({
        FechaInicioPlanificada: {
            type: DataTypes.DATE,
        },
        FechaFinPlanificada: {
            type: DataTypes.DATE,
        },
        HabitacionId: {
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize,
        modelName: 'Estadia'
    });
    return Estadia;
};