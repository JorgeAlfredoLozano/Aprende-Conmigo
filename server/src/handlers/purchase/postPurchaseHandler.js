const postPurchaseController = require('../../controllers/purchase/postPurchaseController');

const postPurchaseHandler = async (req,res) => {
    const {idUser,idPub,hora} = req.body;
    try {
        const buy = await postPurchaseController(idUser,idPub,hora);
        return res.status(200).send("Compra realizada con éxito")
    } catch (error) {
        return res.status(400).send(error)
    }
}

module.exports = postPurchaseHandler;