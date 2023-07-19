const {Favorite} = require("../../db")

const deleteFavController = async (id)=>{
   const deleteFav = await Favorite.destroy({
    where:{id: id}
   })
   
   if(deleteFav === 0) return "No se encontro el elemento"
   return "Se elimino correctamente"
}

module.exports= deleteFavController;