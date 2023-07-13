const {User}= require('../../db');

const getUserByIdController=async(id)=>{
    const infoUser =await User.findOne({where:{id:id}});
        return infoUser;    
}
  
module.exports = getUserByIdController;