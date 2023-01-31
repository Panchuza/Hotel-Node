'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class HabitacionPrecio extends Model {
        static associate(models){
            HabitacionPrecio.hasMany(models.Habitacion, {
                as: 'habitacion',
                foreignKey: 'HabitacionPrecioId'
            });
        }
    };
    HabitacionPrecio.init({
        Precio: {
            type: DataTypes.INTEGER,
        },
        PrecioFechaDesde: {
            type: DataTypes.DATE,
        },
        PrecioFechaHasta: {
            type: DataTypes.DATE,
        },
    }, {
        sequelize,
        modelName: 'HabitacionPrecio',
    });
    return HabitacionPrecio;
};