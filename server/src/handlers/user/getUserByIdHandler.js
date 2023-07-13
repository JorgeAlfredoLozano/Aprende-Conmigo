const getUserByIdController=require('../../controllers/user/getUserByIdController')

const getUserByIdHandler=async(req,res)=>{
    const {id}=req.params;
    try{
        const infoUser =await getUserByIdController(id); 
        if(infoUser)return res.status(200).send(infoUser);              
        else return res.status(200).send("No existe el usuario")
        }catch(error){
        return res.status(404).send('Error en ruta 3');
    }};
module.exports = getUserByIdHandler;