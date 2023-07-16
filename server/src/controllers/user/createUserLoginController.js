const { User } = require("../../db");
const sendemail=require('../../utils/sendmail')
const createUserLoginController = async (name, email, assets) => {
  const exist = await User.findOne({ where: { email: email } });
 
  if (!exist) {
    const newUser = await User.create({ name, email, assets });

    // Envía el correo de bienvenida utilizando SendGrid


    if (newUser) {
      sendemail("register",email,datos='')
      return newUser;
    }
  }

  console.log('El usuario ya está creado');
};

module.exports = createUserLoginController;

