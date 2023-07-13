const putPhotoController=require('../../controllers/user/putPhotoController')


const putPhotoHandler=async(req,res)=>{
    const {email}=req.params;
    const {assets} = req.body;
    try{
       const newPhoto= await putPhotoController(assets,email);
       res.status(200).send("Photo actualizada");     
     }catch(error) {
       return res.status(404).send(error.message);
     }
  }; 
module.exports = putPhotoHandler;

