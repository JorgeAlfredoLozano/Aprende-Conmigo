const loginInController = require("../../controllers/login/loginController") // requerimos el controller

const loginInHandler = async(req,res) => {
    const {username,password} = req.body;
    try { 
        const newUser = await loginInController(username,password) 
        return res.status(200).send(newUser);       
    } catch(error){
        return res.status(404).json({ error: error.message }); 
    }
};
module.exports = loginInHandler;