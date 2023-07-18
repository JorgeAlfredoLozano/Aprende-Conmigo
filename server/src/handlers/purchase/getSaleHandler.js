const getSaleController = require('../../controllers/purchase/getSaleController');

const getSaleHandler = async (req,res) => {
    const {id} = req.params;
    try {
        const allSales = await getSaleController(id);
        return res.status(200).send(allSales);
    } catch (error) {
        return res.status(400).send(error);
    }
}

module.exports = getSaleHandler;