const {Review,User} = require('../../db')

const getReviewController = async (idPub) => {
    console.log(idPub)
    const pub=await Review.findAll(

       { where:{PublicationId:idPub},
       include:[
          { model:User,
            attributes: ['assets','name']}
         ]}
    );   
    return pub;   
}

module.exports = getReviewController;