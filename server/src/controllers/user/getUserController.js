const {User}= require('../../db');

const getUserController=async(email)=>{
    const infoUser =await User.findOne({where:{email:email}});
        return infoUser;    
}
  
module.exports = getUserController;
