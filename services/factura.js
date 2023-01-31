const  { Factura } = require('../database/models');


const getFactura = async () => {
    const factura = await Factura.findAll({ include: { association: 'medioPago', attributes: ['Nombre'] },
    attributes: ['Id', 'Monto', 'FechaEmision', 'EstadiaId']});
    return factura;
}

const getFacturaId = async (id) => {
    const factura = await Factura.findByPk(id);
    return factura;
}

const createFactura = async (factura) => {
    const newFactura = await Factura.create( factura );
    return newFactura;
}

const updateFactura = async (id, factura) => {
    const updatedFactura = await Factura.update(factura, {
        where: {
            id: id
        }
    });
    return updatedFactura;
}

// const deletePersonaGenero = async (id) => {
//     const deletedPersonaGenero = await Factura.destroy({
//         where: {
//             id: id
//         }
//     });
//     return deletedPersonaGenero;
// }

module.exports = {
    createFactura,
    getFactura,
    getFacturaId,
    updateFactura,
    // deletePersonaGenero
};