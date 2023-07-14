const {User} = require("../../db");

const createUserLoginController = async (name,email,assets) => {  
   const exist=await User.findOne({where:{email:email}}) 
     if(!exist){
        const newUser = await User.create({name,email,assets});   
        return newUser;
     }    
        return console.log("ya esta creado"); 
};


module.exports = createUserLoginController;  
