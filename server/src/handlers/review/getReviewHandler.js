const getReviewController = require('../../controllers/review/getReviewController');

const getReviewHandler = async (req,res) => { 
        const {idPub}=req.params
    try {
        const review = await getReviewController(idPub);
        return res.status(200).send(review)
    } catch (error) {
        return res.status(400).send(error)
    }
}

module.exports = getReviewHandler;