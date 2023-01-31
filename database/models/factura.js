'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Factura extends Model {
        static associate(models){
            Factura.belongsTo(models.MedioPago, {
                as: 'medioPago',
                foreignKey: 'MedioPagoId'
            });
            Factura.belongsTo(models.Estadia, {
                as: 'estadia',
                foreignKey: 'EstadiaId'
            });
        }
    };
    Factura.init({
        Monto: {
            type: DataTypes.INTEGER,
        },
        FechaEmision: {
            type: DataTypes.DATE,
        },
        EstadiaId: {
            type: DataTypes.INTEGER,
        },
        MedioPagoId: {
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize,
        modelName: 'Factura',
    });
    return Factura;
};