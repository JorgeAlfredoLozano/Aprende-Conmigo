const { Message } = require('../../db');
const { Op } = require('sequelize');

const getNotReadController = async (idSend,idReceived) => {
    let notReadCount
    let notRead=[]
  if (idSend==="all")
    {notRead = await Message.findAll({
    where: {
      [Op.and]: [
        { idReceived: idReceived },
        { seen: false },
      ],
    },
    order: [['createdAt', 'ASC']],
  });

  notReadCount = notRead.length
}

  else 

  {
    console.log(idSend,"        ",idReceived)
    notRead = await Message.findAll({
    where: {
      [Op.and]: [
        { idSend: idSend},
        { idReceived: idReceived },
        { seen: false },
      ],
    },
    order: [['createdAt', 'ASC']],
  });

  // Utiliza la propiedad count para obtener la cantidad de mensajes no leídos
  notReadCount = notRead.length
}

  return {notRead,notReadCount};
};

module.exports = getNotReadController;
