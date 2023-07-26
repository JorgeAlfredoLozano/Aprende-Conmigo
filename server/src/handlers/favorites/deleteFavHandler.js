const deleteFavController= require("../../controllers/favorites/deleteFavController")


const deleteFavHandler = async(req, res)=>{
    const {id}= req.params;
   try {
    const deleteFav = await deleteFavController(id)
    return res.status(200).send(deleteFav)
   } catch (error) {
    return res.status(400).send(error)
   }
};

module.exports= deleteFavHandler;