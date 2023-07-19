const getBuyUserController = require('../../controllers/purchase/getBuyUserController');

const getBuyUserHandler = async (req,res) => {
    const {id} = req.params;
    try {
        const allPurchase = await getBuyUserController(id);
        
        return res.status(200).send(allPurchase)
    } catch (error) {
        return res.status(400).send(error)
    }
}

module.exports = getBuyUserHandler;