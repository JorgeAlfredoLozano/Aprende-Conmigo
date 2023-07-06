/*********************************************/
/* CONTROLLER: Actualizar datos de un piloto */
/*********************************************/
const { User } = require('../db');

const updateUser = async (displayName,email,gender,phone) => {
  // const userEmail= await User.findOne({where:{email:email}})

  
  let objUpdate={
    name:displayName,
    gender:gender,
    phone:phone  
  };
  console.log(objUpdate,"2C")
  
  const userUpdate= await User.update( objUpdate , // Datos actualizados
  { where: { email: email } }) // Condición)
  

}

module.exports = updateUser;

