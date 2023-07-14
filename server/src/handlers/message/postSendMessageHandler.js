const postSendMessageController=require('../../controllers/message/postSendMessageController')

const postSendMessageHandler = async(req,res) => {
  const {idSend,idReceived ,message} = req.body;
   
    try {
        const sendMessage = await postSendMessageController(idSend,idReceived ,message)
        res.status(200).send("Mensaje enviado")
    } catch (error) {
        res.status(400).send("No se pudo enviar el mensaje")
    }
}

module.exports = postSendMessageHandler;