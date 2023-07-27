const { Message } = require('../../db');
const { Op } = require('sequelize');
const putSeenController = async (idSend,idReceived) => {
    const putSeen = await Message.update({seen:true},{where: {
        [Op.and]: [
          { idSend: idSend },
          { idReceived: idReceived },
        ]}}) 
    return putSeen;
}

module.exports = putSeenController;

