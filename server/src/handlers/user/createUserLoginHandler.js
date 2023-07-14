const createUserLoginController = require("../../controllers/user/createUserLoginController") // requerimos el controller

// Controlador para la ruta de creación de usuario
const createUserLoginHandler = async(req,res) => {
     // Extrae los datos del cuerpo de la solicitud
    const {displayName,email,photoURL} = req.body;
    try{ 
        const newUser = await createUserLoginController(displayName,email,photoURL) 
        return res.status(200).send(newUser);       
    }catch(error){
        return res.status(404).json({ error: error.message }); 
    }
};

module.exports = createUserLoginHandler;