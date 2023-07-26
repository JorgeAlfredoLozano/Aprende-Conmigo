const {Favorite, User, Publication} = require("../../db") 



const postFavController= async (UserId, PublicationId)=>{
   const postFav = await Favorite.create({
    UserId: UserId,
    PublicationId: PublicationId
 });
   
   // const user = await Favorite.findOne(
   //  {where: {id:UserId},
   //  include:{
   //    model: User
   //   }}
   // )
   
   // await user.addFavorite(postFav)


   // const pub= await Publication.findOne(
   //  {where: {id:PublicationId},
   //  include:{
   //    model: Publication
   //   }
   // })
   // await pub.addFavorite(postFav)
   return postFav;
}

module.exports= postFavController;