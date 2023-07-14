const getMessageByUserController = require('../../controllers/message/getMessageByUserController')

const getMessageByUserHandler=async(req,res)=>{
    const {id} = req.params;
    console.log(id)
    try{
        const allMessage = await getMessageByUserController(id)
        return res.status(200).send(allMessage);
        }catch(error){
        return res.status(404).send(error);
    }};

module.exports = getMessageByUserHandler;