const {Lesson}= require('../db');

const postLesson=async (jsonInfo, model) => {
    jsonInfo.data.forEach(async (element) => {
       try {
          await model.findOrCreate({
             where: element,
          });
       } catch (err) {
          console.log(err.message,"1");
       }
    });
 };
  const getLesson=async(req,res)=>{
    try{
        const infoUser =await Lesson.findAll(); 
        if(infoUser)return res.status(200).send(infoUser);              
        else return res.status(200).send("No existe el usuario")
        }catch(error){
        return res.status(404).send('Error en ruta 3');
    }};

module.exports={
   
    postLesson,
    getLesson,
};