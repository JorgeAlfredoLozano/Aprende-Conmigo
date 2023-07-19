const {Purchase, Publication} = require('../../db');

const getSaleController = async (id) => { //id profesor
    const allSales = await Purchase.findAll({
           include: [{model: Publication,where:{UserId:id}}] // Incluir las Lessons relacionadas
      });
    return allSales;
}

module.exports = getSaleController;