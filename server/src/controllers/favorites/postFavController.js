const {Favorite, User, Publication} = require("../../db") 



const postFavController= async (UserId, PublicationId)=>{
   const postFav = await Favorite.create({
    UserId: UserId,
    PublicationId: PublicationId
 });

 return postFav;
   
//    const user = await User.findOne(
//     {where: {id:UserId}}
//    )
   
//    await user.addFavorite(postFav)


//    const pub= await Publication.findOne(
//     {where: {id:PublicationId}}
//    )
//    await pub.addFavorite(postFav)
}

module.exports= postFavController;