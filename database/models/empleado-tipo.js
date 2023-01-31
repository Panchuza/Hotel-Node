'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class EmpleadoTipo extends Model {
        static associate(models){
            EmpleadoTipo.hasMany(models.Empleado, {
                as: 'empleado',
                foreignKey: 'EmpleadoTipoId'
            });
        }
    };
    EmpleadoTipo.init({
        Nombre: {
            type: DataTypes.STRING,
        },
    }, {
        sequelize,
        modelName: 'EmpleadoTipo',
    });
    return EmpleadoTipo;
};