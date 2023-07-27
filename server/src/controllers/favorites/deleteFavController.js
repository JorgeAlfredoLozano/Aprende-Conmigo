const {Favorite} = require("../../db")

const deleteFavController = async (id)=>{
   const deleteFav = await Favorite.destroy({
    where:{PublicationId: id}
   })
   if (deleteFav === 0) {
      return { success: false, message: "No se encontró el elemento" };
    }
    return { success: true, deleteId: id };
};

module.exports= deleteFavController;