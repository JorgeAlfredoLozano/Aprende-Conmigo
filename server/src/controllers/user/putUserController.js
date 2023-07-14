const {User}=require('../../db');

const putUserController = async (name,gender,phone,date,email) => {  
    const newUser= await User.update({name,gender,phone,date},{where:{email:email}});
    if(newUser) return newUser;
    else throw new Error('no se encontro un email valido');   
    }    
 module.exports = putUserController; 