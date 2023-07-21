const getNotReadController=require('../../controllers/message/getNotReadController')

const getNotReadHandler = async(req,res)=> {
    const {idSend,idReceived} = req.params;
    try {
        const getNotRead = await getNotReadController(idSend,idReceived)

        return res.status(200).send(getNotRead);
    }catch(error){
    return res.status(404).send(error);  
    }
    
}

module.exports = getNotReadHandler