'use strict'

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Persona extends Model{
        static associate(models) {
            Persona.belongsTo(models.PersonaGenero, {
              as: 'personaGenero',
              foreignKey: 'PersonaGenero',
            });
            Persona.hasMany(models.Huesped, {
              as: 'huesped',
              foreignKey: 'PersonaId',
            });
            Persona.hasMany(models.Empleado, {
              as: 'empleado',
              foreignKey: 'PersonaId',
            });
          }
    };
    Persona.init({
        Nombre: {
          type: DataTypes.STRING,
        },
        Apellido: {
          type: DataTypes.STRING,
        },
        DNI: {
          type: DataTypes.INTEGER,
        },
        FechaDeNacimiento: {
          type: DataTypes.DATE,
        },
        Telefono: {
          type: DataTypes.INTEGER,
        },
        Email: {
          type: DataTypes.STRING,
        },
        PersonaGenero: {
          type: DataTypes.INTEGER,
        },
      }, {
        sequelize,
        modelName: 'Persona',
      });
      return Persona;
};


