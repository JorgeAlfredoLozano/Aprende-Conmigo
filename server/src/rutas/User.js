
const {User}= require('../db');

const putUser=async(req,res)=>{
    const {email}=req.params;
    const {name,gender,phone,date} = req.body;
    
  try{
     const newUser= await User.update({name,gender,phone,date},{where:{email:email}});
     res.status(200).send("usuario actualizado");     
   }catch(error) {
     return res.status(404).send(error.message);
   }
}; 
const getUser=async(req,res)=>{
  const {email}=req.params;
  try{
      const infoUser =await User.findAll({where:{email:email}}); 
      if(infoUser)return infoUser;              
      else return res.status(200).send("No existe el usuario")
      }catch(error){
      return res.status(404).send('Error en ruta 3');
  }};
  const putPhoto=async(req,res)=>{
    const {email}=req.params;
    const {assets} = req.body;
    
  try{
    console.log(assets);

     const newPhoto= await User.update({assets},{where:{email:email}});

     res.status(200).send("Photo actualizada");     
   }catch(error) {
     return res.status(404).send(error.message);
   }
}; 

module.exports={
    putUser,
    getUser,
    putPhoto,
};

