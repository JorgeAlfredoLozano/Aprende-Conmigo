const {Review} = require('../../db')

const getReviewController = async (idPub) => {
   
    const pub=await Review.findAll(
        {where:{PublicationId:idPub}
    });   
    return pub;   
}

module.exports = getReviewController;