const { Router } = require("express");
const route = Router();

const postSendMessageHandler=require('../handlers/message/postSendMessageHandler')
const getMessageByUserHandler=require('../handlers/message/getMessageByUserHandler')

route.post('/sendmessage',postSendMessageHandler); //Envio de mensaje
route.get('/getallmessage/:id',getMessageByUserHandler); // traigo todos los mensajes de un usuario

module.exports = route;