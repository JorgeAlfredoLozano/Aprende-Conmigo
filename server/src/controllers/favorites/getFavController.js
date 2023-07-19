const {Favorite} = require("../../db")

const getFavController = async(UserId)=>{
    const allFav = await Favorite.findAll({
        where:{UserId:UserId}
    })
    
   if(allFav) return allFav;
   return "No se encotro favorito"
}

module.exports= getFavController;