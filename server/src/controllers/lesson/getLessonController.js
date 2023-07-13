const {Lesson} = require('../../db');

const getLessonController=async()=>{
        const infoUser =await Lesson.findAll(); 
        if(infoUser) return infoUser              
        else return ("No existen lessons")
}

module.exports = getLessonController;
    