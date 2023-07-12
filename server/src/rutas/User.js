const {User,Lesson,Publication}= require('../db');

const putUser=async(req,res)=>{
    const {email}=req.params;
    const {name,gender,phone,date} = req.body; 
  try{
     const newUser= await User.update({name,gender,phone,date},{where:{email:email}});
     res.status(200).send("usuario actualizado");     
   }catch(error) {
     return res.status(404).send(error.message);
   }
}; 

const getUser=async(req,res)=>{
  const {email}=req.params;
  try{
      const infoUser =await User.findOne({where:{email:email}}); 
      if(infoUser)return res.status(200).send(infoUser);              
      else return res.status(200).send("No existe el usuario")
      }catch(error){
      return res.status(404).send('Error en ruta 3');
  }};
 
const putPhoto=async(req,res)=>{
  const {email}=req.params;
  const {assets} = req.body;
  try{
     const newPhoto= await User.update({assets},{where:{email:email}});
     res.status(200).send("Photo actualizada");     
   }catch(error) {
     return res.status(404).send(error.message);
   }
}; 
const postPublication=async(req,res)=>{
  const {email} = req.params;
  const {title, about_class, about_teacher, value, lesson_name, grade} = req.body;

  try {
    const newPub = await Publication.create({title, about_class, about_teacher, value, grade});
    const newName = await User.findOne({where: {email: email}});
    // RELACION UNO-MUCHOS
    await newName.addPublication(newPub);
    const newLesson = await Lesson.create({lesson_name});
    // RELACION MUCHOS-MUCHOS tabla: PublicationLesson
    await newPub.addLesson(newLesson);
    res.status(200).send("Publicación creada correctamente.");
  } catch (error) {
    return res.status(500).send("Error interno del servidor.");
};
}; 
const putPublication=async(req,res)=>{//trae el cabezal en la base de datos
  const {id} = req.params;
  const {title, about_class, about_teacher, value,status} = req.body;
  try {
    const searchPub=await Publication.findOne({where:{id:id}})
    if(!searchPub) throw new Error(message.error)
    if (status) {
      const updatePub = await searchPub.update({title, about_class, about_teacher, value});
      return res.status(200).send(updatePub)
    } else {
      const updateStatus = await searchPub.update({status});
      return res.status(200).send(updateStatus)
    }
    
  } catch (error) {
    return res.status(400).send("Error en ruta putPublication");
  }
};
const getAllPublication=async(req,res)=>{
  const {email} = req.params;
  try {
    const findUser=await User.findOne({where:{email:email}})
    const searchPub = await Publication.findAll({where: {UserId: findUser.id},include: [{model: Lesson,attributes: ["lesson_name"], through:{attributes:[]}}]});
    if(!searchPub) throw new Error("No se encontraron publicaciones")
   
    return res.status(200).send(searchPub );
  } catch (error) {
    return res.status(400).send("Error en ruta getAllPublication");
  }
}

module.exports={
    putUser,
    getUser,
    putPhoto,
    postPublication,
    putPublication,
    getAllPublication,
};

