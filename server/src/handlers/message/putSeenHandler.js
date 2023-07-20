const putSeenController = require('../../controllers/message/putSeenController')

const putSeenHandler = async (req,res) => {
    const { idSend,idReceived } = req.params;
    try {
        const putSeen = await putSeenController(idSend,idReceived);
        return res.status(200).send(putSeen)
    } catch (error) {
        return res.status(400).send(error)
    }
}

module.exports = putSeenHandler;