'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class HuespedEstadia extends Model {
        static associate(models){
            HuespedEstadia.belongsTo(models.Huesped, {
                as: 'huesped',
                foreignKey: 'HuespedId'
            });
            HuespedEstadia.belongsTo(models.Estadia, {
                as: 'estadia',
                foreignKey: 'EstadiaId'
            });
        }
    };
    HuespedEstadia.init({
        Titular: {
            type: DataTypes.BOOLEAN,
        },
        HuespedId: {
            type: DataTypes.INTEGER,
        },
        EstadiaId: {
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize,
        modelName: 'HuespedEstadia',
    });
    return HuespedEstadia;
};