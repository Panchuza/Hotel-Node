'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Huesped extends Model {
        static associate(models){
            Huesped.hasMany(models.HuespedEstadia, {
                as: 'huespedEstadia',
                foreignKey: 'HuespedId'
            });
            Huesped.belongsTo(models.Persona, {
                as: 'persona',
                foreignKey: 'PersonaId'
            });
        }
    };
    Huesped.init({
        PersonaId: {
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize,
        modelName: 'Huesped',
    });
    return Huesped;
};