const putUserController=require('../../controllers/user/putUserController')
const sendmail=require('../../utils/sendmail')

const putUserHandler=async(req,res)=>{
    const {email}=req.params;
    const {name,gender,phone,date,admin,status} = req.body; 
  try{
   
     const newUser= await putUserController(name,gender,phone,date,email,admin,status);
     if(!status){
    await sendmail('userOff', email, '', '', '', '', nombre=name, '')
  }
     res.status(200).send("usuario actualizado");     
   }catch(error) {
     return res.status(404).send(error.message);
   }
}; 
module.exports = putUserHandler;