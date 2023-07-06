/***************************************/
/* HANDLER: Para actualizar un usuario */
/***************************************/
const updateUser = require('../controllers/updateUserController') 

const updateUserHandler = async (req,res) => {
    const {email}=req.params;
    const {displayName,gender,phone} = req.body; //me traigo los datos para actualizar email (obligatorio) y los que haya que modificar
    

    try {
        const updatedUser = await updateUser(displayName,email,gender,phone);
        

        return res.status(200).send("usuario actualizado exitosamente ");
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = updateUserHandler;