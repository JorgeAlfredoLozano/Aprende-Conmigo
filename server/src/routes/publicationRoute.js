const { Router } = require("express");
const route = Router();
const postPublicationHandler=require('../handlers/publication/postPublicationHandler')
const putPublicationHandler=require('../handlers/publication/putPublicationHandler')
const getAllPublicationHandler=require('../handlers/publication/getAllPublicationHandler')
const getAllAnouncementsHandler=require('../handlers/publication/getAllAnouncementsHandler')
const postSendMessageHandler=require('../handlers/message/postSendMessageHandler')

route.post('/save/:email',postPublicationHandler); //Creación de Aviso
route.put('/save/:id',putPublicationHandler); //Actualización|Borrado lógico de Aviso
route.get('/get/anouncements',getAllAnouncementsHandler);//Traer todas los avisos
route.get('/get/:email',getAllPublicationHandler); //Traer todas los avisos de un usuario
route.post('/sendmessage',postSendMessageHandler); //Envio de mensaje

module.exports = route;