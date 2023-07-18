const {Purchase} = require('../../db')

const getBuyUserController = async (id) => {
    const allPurchase = await Purchase.findAll({where:{UserId:id}})
    return allPurchase;
}

module.exports = getBuyUserController;