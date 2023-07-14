const putUserController=require('../../controllers/user/putUserController')

const putUserHandler=async(req,res)=>{
    const {email}=req.params;
    const {name,gender,phone,date} = req.body; 
  try{
   
     const newUser= await putUserController(name,gender,phone,date,email);
     res.status(200).send("usuario actualizado");     
   }catch(error) {
     return res.status(404).send(error.message);
   }
}; 
module.exports = putUserHandler;