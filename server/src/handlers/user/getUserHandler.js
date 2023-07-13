const getUserController=require('../../controllers/user/getUserController')

const getUserHandler=async(req,res)=>{
    const {email}=req.params;
    try{
        const infoUser =await getUserController(email); 
        if(infoUser)return res.status(200).send(infoUser);              
        else return res.status(200).send("No existe el usuario")
        }catch(error){
        return res.status(404).send('Error en ruta 3');
    }};
module.exports = getUserHandler;
