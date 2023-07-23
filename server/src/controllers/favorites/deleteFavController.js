const {Favorite} = require("../../db")

const deleteFavController = async (id)=>{
   console.log("este es el id ", id)
   const deleteFav = await Favorite.destroy({
      
    where:{PublicationId: id}
   })
   // console.log("quepa", deleteFav)
   
   // if(deleteFav === 0) return "No se encontro el elemento"
   // return "Se elimino correctamente"

   if (deleteFav === 0) {
      return { success: false, message: "No se encontró el elemento" };
    }

    return { success: true, deleteId: id };
}

module.exports= deleteFavController;