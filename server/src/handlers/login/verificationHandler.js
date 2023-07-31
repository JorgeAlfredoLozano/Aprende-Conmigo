const verificationController = require("../../controllers/login/verificationController") // requerimos el controller

const verificationHandler = async(req,res) => {
    const {token,email} = req.body; 
    try { 
        const newUser = await verificationController(token,email) 
        return res.status(200).send(newUser);       
    } catch(error){
        return res.status(404).json({ error: error.message }); 
    }
};
module.exports = verificationHandler;