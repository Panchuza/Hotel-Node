'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Empleado extends Model {
        static associate(models){
            Empleado.belongsTo(models.Persona, {
                as: 'persona',
                foreignKey: 'PersonaId'
            });
            Empleado.belongsTo(models.EmpleadoTipo, {
                as: 'empleadoTipo',
                foreignKey: 'EmpleadoTipoId'
            });
        }
    };
    Empleado.init({
        Legajo: {
            type: DataTypes.STRING,
        },
        FechaEntrada: {
            type: DataTypes.DATE,
        },
        FechaSalida: {
            type: DataTypes.DATE,
        },
        EmailLaboral: {
            type: DataTypes.STRING,
        },
        Password: {
            type: DataTypes.STRING,
        },
        PersonaId: {
            type: DataTypes.INTEGER,
        },
        EmpleadoTipoId: {
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize,
        modelName: 'Empleado',
    });
    return Empleado;
};