const putPublicationController=require('../../controllers/publication/putPublicationController')
const sendmail=require('../../utils/sendmail')


const putPublicationHandler=async(req,res)=>{
    const {id} = req.params;
    const {title, about_class, about_teacher, value, status, nombre, email } = req.body;
    console.log(req.body,'bodyyyy')
    try {
      const putPublication=await putPublicationController(id,title, about_class, about_teacher, value, status)
      if(email && !status) {
        await sendmail('publiOff', email, "", "", "", "", nombre, title )
        
       }
      
      return res.status(200).send(putPublication)
    } catch (error) {
      return res.status(400).send("Error en ruta putPublication");
    }
  };

  module.exports = putPublicationHandler;