const {Purchase, Publication,User} = require('../../db');

const postPurchaseController = async (idUser,idPub,hora) => {
    const buy = await Purchase.create({hora});
    const newName = await User.findOne({where: {id: idUser}});
    // RELACION UNO-MUCHOS
    await newName.addPurchase(buy);
    const newPub = await Publication.findOne({where:{id:idPub}});
    await newPub.addPurchase(buy);
}

module.exports = postPurchaseController;