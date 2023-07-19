const postReviewController = require('../../controllers/review/postReviewController');

const postReviewHandler = async (req,res) => { 
    try {
          const {idUser,idPub,comment, rating}=req.body
        const review = await postReviewController(comment, rating,idUser,idPub);
        return res.status(200).send(review)
    } catch (error) {
        return res.status(400).send(error)
    }
}

module.exports = postReviewHandler;