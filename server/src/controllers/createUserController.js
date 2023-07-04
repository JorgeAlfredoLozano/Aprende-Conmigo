
const {User,Country,Province,Valle} = require("../db");



const createUserController = async (name,lastName,date,mail,gender,phone,assets,location,certificate) => {
   console.log(name,lastName,date,mail,gender,phone,assets,location,certificate);
    const newUser = await User.create({name,lastName,date,mail,gender,phone,assets,location,certificate})
    
}


module.exports = createUserController;