const getLessonController =require('../../controllers/lesson/getLessonController')

const getLessonHandler=async(req,res)=>{
    try{
        const infoUser =await getLessonController(); 
        return res.status(200).send(infoUser)
        } 
    catch(error) {
        return res.status(404).send('Error en la ruta getLessonHandler');
    }};

    module.exports = getLessonHandler;