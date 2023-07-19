const {User}=require('../../db');

const putUserController = async (name,gender,phone,date,email,admin,status) => {  
    const newUser= await User.update({name,gender,phone,date,admin,status},{where:{email:email}});
    if(newUser) return newUser;
    else throw new Error('no se encontro un email valido');   
    }    
 module.exports = putUserController; 