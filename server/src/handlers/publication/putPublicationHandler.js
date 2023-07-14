const putPublicationController=require('../../controllers/publication/putPublicationController')

const putPublicationHandler=async(req,res)=>{
    const {id} = req.params;
    const {title, about_class, about_teacher, value,status} = req.body;
    try {
      const putPublication=await putPublicationController(id,title, about_class, about_teacher, value,status)
      return res.status(200).send(putPublication)
    } catch (error) {
      return res.status(400).send("Error en ruta putPublication");
    }
  };

  module.exports = putPublicationHandler;