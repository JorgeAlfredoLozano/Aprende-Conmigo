const createUserController = require("../controllers/createUserController") // requerimos el controller

// Controlador para la ruta de creación de usuario
const createUserHandler = async(req,res) => {
     // Extrae los datos del cuerpo de la solicitud
    const {name,lastName,date,mail,gender,phone,assets,location,certificate} = req.body;
    
    try{ 
         // Llama al controlador createUserController para crear un nuevo usuario
        const newUser = await createUserController(name,lastName,date,mail,gender,phone,assets,location,certificate) 
        return res.status(200).send(newUser);  // Retorna una respuesta con el nuevo usuario creado       
    }catch(error){
        return res.status(404).json({ error: error.message }); // Si ocurre un error, retorna una respuesta de error con el mensaje del error
    }
};

module.exports = createUserHandler;