const {Favorite, Publication} = require("../../db")

const getFavController = async(UserId)=>{
    const allFav = await Favorite.findAll({
        where:{UserId:UserId},
        include:{
            model: Publication,
            // attributes: [],
           
           }
    })
    
   if(allFav) return allFav;
   return "No se encontro favorito"
}

module.exports= getFavController;