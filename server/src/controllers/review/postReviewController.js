const {Review,Publication,User} = require('../../db')

const postReviewController = async (comment, rating,idUser,idPub) => {
   

        const review = await Review.create({comment, rating});
        const pub=await Publication.findOne({where:{id:idPub}});
        const user=await User.findOne({where:{id:idUser}});
        console.log(user,pub)
          // RELACION UNO-MUCHOS
        await pub.addReview(review);
        await user.addReview(review);
}

module.exports = postReviewController;