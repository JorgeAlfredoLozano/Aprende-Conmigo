
const {User} = require("../db");



// Controlador para crear un nuevo usuario
const createUserController = async (name,lastName,date,mail,gender,phone,assets,location,certificate) => {

     // Crea un nuevo usuario en la tabla "User" utilizando los parámetros proporcionados
    const newUser = await User.create({name,lastName,date,mail,gender,phone,assets,certificate})       
    // 3 y 4 calle y numero 
    // 5 y 6 apartamento y piso
    return newUser; // Devuelve el nuevo usuario creado
};


module.exports = createUserController;  // Exporta el controlador para que pueda ser utilizado en otros módulos