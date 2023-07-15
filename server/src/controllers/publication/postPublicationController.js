const {User,Publication,Lesson}=require('../../db')

const postPublicationController=async(title, about_class, about_teacher, value, grade,email,lesson_name)=>{

    const newPub = await Publication.create({title, about_class, about_teacher, value, grade});
    const newName = await User.findOne({where: {email: email}});
    // RELACION UNO-MUCHOS
    await newName.addPublication(newPub);
    console.log(lesson_name,"1")
    const newLesson = await Lesson.findOne({where:{lesson_name:lesson_name}});
    // RELACION MUCHOS-MUCHOS tabla: PublicationLesson
    console.log(newLesson,"2")
    if(newLesson){
    await newPub.addLesson(newLesson);
    }
    

    return ("Publicación creada");
}
module.exports=postPublicationController;
