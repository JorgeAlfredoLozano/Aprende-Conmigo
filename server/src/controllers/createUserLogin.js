const {User} = require("../db");

const createUserLogin = async (name,email,assets) => {
   
   const exist=await User.findOne({
    where:{
        email:email
    }

   })
    console.log(exist)
     if(!exist){
        const newUser = await User.create({name,email,assets});   
        return newUser;
     }
    
        return console.log("ya esta creado"); 
};


module.exports = createUserLogin;  
