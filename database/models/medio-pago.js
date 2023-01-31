'use strict';
const {
    Model
  } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    class MedioPago extends Model {
    };
    MedioPago.init({
      Nombre: {
        type: DataTypes.STRING,
      },
      Descripcion: {
        type: DataTypes.STRING,
      },
      FechaFinVigencia: {
        type: DataTypes.DATE,
      },
    }, {
      sequelize,
      modelName: 'MedioPago',
    });
    return MedioPago;
  };