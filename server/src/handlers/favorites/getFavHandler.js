const getFavController= require("../../controllers/favorites/getFavController")

const getFavHandler = async (req, res)=>{
    const {UserId} = req.params;
   try {
    const allFav = await getFavController(UserId)
    return res.status(200).send(allFav)
   } catch (error) {
    return res.status(400).send(error);
   }
};

module.exports= getFavHandler;