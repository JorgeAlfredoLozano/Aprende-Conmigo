
const {User} = require("../db");
const createUserController = async (name,date,mail,gender,phone,assets,certificate) => { 
    const newUser = await User.create({name,date,mail,gender,phone,assets,certificate})        
    return newUser; 
};

module.exports = createUserController;  