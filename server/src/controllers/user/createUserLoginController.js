<<<<<<< HEAD
const { User } = require("../../db");
const sendemail=require('../../utils/sendmail')
const createUserLoginController = async (name, email, assets) => {
  const exist = await User.findOne({ where: { email: email } });
 
  if (!exist) {
    const newUser = await User.create({ name, email, assets });

    // Envía el correo de bienvenida utilizando SendGrid
   

    if (newUser) {
      sendemail("register",email)
      return newUser;
    }
  }

  console.log('El usuario ya está creado');
};

module.exports = createUserLoginController;

=======
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
>>>>>>> 58375bbc69c5c49eb9cb295d70c1c324e2f2d397
