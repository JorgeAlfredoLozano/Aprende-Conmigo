const postPublicationController=require('../../controllers/publication/postPublicationController')

const postPublicationHandler=async(req,res)=>{
    const {email} = req.params;
    const {title, about_class, about_teacher, value, lesson_name, grade} = req.body;
    try {
      const newPub = await postPublicationController(title, about_class, about_teacher, value, grade,email,lesson_name);
      res.status(200).send("Publicación creada correctamente.");
    } catch (error) {
      return res.status(500).send("Error interno del servidor.");
  };
}

module.exports=postPublicationHandler;