const {Publication} = require('../../db');

const putPublicationController=async(id,title, about_class, about_teacher, value,status)=>{
      const searchPub=await Publication.findOne({where:{id:id}})
      if(!searchPub) throw new Error(message.error)
        const updatePub = await searchPub.update({title, about_class, about_teacher, value,status});
        return updatePub
     
};

module.exports = putPublicationController;