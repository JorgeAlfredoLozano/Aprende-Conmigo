const {Message} = require('../../db')
const { Op } = require('sequelize');

const getMessageByUserController = async (id) => {
    const allMessage = await Message.findAll({
      where: {
        [Op.or]: [
          { idSend: id },
          { idReceived: id },
        ],
      },
      order: [['createdAt', 'ASC']],
    });
  
    if (!allMessage) {
      throw new Error("No se encontraron mensajes para este usuario");
    }
  
    const otherUsers = [];
    const groupedMessages = [];
  
    allMessage.forEach((message) => {
      if (message.idSend !== id && !otherUsers.includes(message.idSend)) {
        otherUsers.push(message.idSend);
      }
      if (message.idReceived !== id && !otherUsers.includes(message.idReceived)) {
        otherUsers.push(message.idReceived);
      }
    });
  
    otherUsers.forEach((userId) => {
      const userMessages = allMessage.filter(
        (message) => message.idSend === userId || message.idReceived === userId
      );
      groupedMessages.push(userMessages);
    });
  
    console.log(groupedMessages);
    return groupedMessages;
  };
  
  module.exports = getMessageByUserController;
  