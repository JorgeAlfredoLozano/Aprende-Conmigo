const postFavController=require('../../controllers/favorites/postFavController')

const postFavHandler =async(req,res)=>{
   const {UserId, PublicationId} = req.body;
    try {
      const newFav = await postFavController( UserId, PublicationId);
      return res.status(200).send(newFav);
    } catch (error) {
      return res.status(400).send(error.message);
  };
}

module.exports=postFavHandler;   