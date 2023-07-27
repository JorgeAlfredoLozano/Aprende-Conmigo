const {Favorite, User, Publication} = require("../../db") 

const postFavController= async (UserId, PublicationId)=>{
   const postFav = await Favorite.create({
    UserId: UserId,
    PublicationId: PublicationId
 });
   return postFav;
}

module.exports= postFavController;