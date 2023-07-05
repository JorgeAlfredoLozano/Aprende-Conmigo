const createUserController=require("../controllers/createUserController")


const createUserHandler=async(req,res)=>{
    const {name,lastName,date,mail,gender,phone,assets,location,certificate}=req.body;
    
    try{ 
          const newUser=await createUserController(name,lastName,date,mail,gender,phone,assets,location,certificate) 
          return res.status(200).send(newUser);         
    }catch(error){
        return res.status(404).json({ error: error.message });
    }
};

module.exports = createUserHandler;