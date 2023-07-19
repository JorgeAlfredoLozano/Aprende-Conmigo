const getAllUserController=require('../../controllers/user/getAllUserController')

const getAllUserHandler=async(req,res)=>{
    try{
        const allUser =await getAllUserController(); 
        if(allUser)return res.status(200).send(allUser);              
        else return res.status(200).send("No hay usuarios para mostrar")
        }catch(error){
        return res.status(404).send(error);
    }};
module.exports = getAllUserHandler;