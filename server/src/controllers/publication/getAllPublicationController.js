const {User,Publication,Lesson} = require('../../db')

const getAllPublicationController=async(email)=>{
      const findUser=await User.findOne({where:{email:email}})
      const searchPub = await Publication.findAll({where: {UserId: findUser.id},include: [{model: Lesson,attributes: ["lesson_name"], through:{attributes:[]}}]});
      if(!searchPub) throw new Error("No se encontraron publicaciones")
      return searchPub;
}

module.exports = getAllPublicationController;