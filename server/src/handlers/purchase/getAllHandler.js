const getAllController = require('../../controllers/purchase/getAllController');

const getAllHandler = async (req,res) => {
    try {
        const allPurchase = await getAllController();
        return res.status(200).send(allPurchase)
    } catch (error) {
        return res.status(400).send(error)
    }
}

module.exports = getAllHandler;