const {Message} = require('../../db')

const postSendMessageController = async (idSend,idReceived ,message) => {
    const sendMessage = await Message.create({idSend,idReceived ,message})
    return sendMessage;
}

module.exports=postSendMessageController;