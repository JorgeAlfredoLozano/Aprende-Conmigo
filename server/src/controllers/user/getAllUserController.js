const {User}= require('../../db');

const getAllUserController = async ()=>{
    const allUser =await User.findAll();
        return allUser;    
}
  
module.exports = getAllUserController;