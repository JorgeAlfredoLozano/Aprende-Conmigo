const { Router } = require("express");
const route = Router();

const postSendMessageHandler=require('../handlers/message/postSendMessageHandler')
const getMessageByUserHandler=require('../handlers/message/getMessageByUserHandler')
const putSeenHandler = require('../handlers/message/putSeenHandler')
const getNotReadHandler = require('../handlers/message/getNotReadHandler')

route.post('/sendmessage',postSendMessageHandler); //Envio de mensaje
route.get('/getallmessage/:id',getMessageByUserHandler); // traigo todos los mensajes de un usuario
route.put('/seen/:idSend/:idReceived',putSeenHandler)
route.get('/notread/:idSend/:idReceived',getNotReadHandler)
module.exports = route;