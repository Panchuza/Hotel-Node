'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PersonaGenero extends Model {
    static associate(models) {
      PersonaGenero.hasMany(models.Persona, {
        as: 'persona',
        foreignKey: 'PersonaGenero'
      });
    }
  };
  PersonaGenero.init({
    Nombre: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'PersonaGenero',
  });
  return PersonaGenero;
};