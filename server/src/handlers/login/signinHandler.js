const signinController = require("../../controllers/login/signinController") // requerimos el controller

const signinHandler = async(req,res) => {
    const {email,password,name} = req.body;
    console.log(email,password,name,'lalo')
    try { 
        const newUser = await signinController(email,password,name) 
        return res.status(200).send('usuario registrado exitosamente');       
    } catch(error){
        return res.status(404).json({ error: error.message }); 
    }
};
module.exports = signinHandler;