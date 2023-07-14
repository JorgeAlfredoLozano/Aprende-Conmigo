const { Router } = require("express");
const route = Router();

const createUserLoginHandler = require("../handlers/user/createUserLoginHandler")
const putUserHandler=require('../handlers/user/putUserHandler')
const getUserHandler=require('../handlers/user/getUserHandler')
const putPhotoHandler=require('../handlers/user/putPhotoHandler')
const {cheackoutApi} = require('../handlers/user/ApiCheckout')
const getUserByIdHandler = require('../handlers/user/getUserByIdHandler')

route.post('/login',createUserLoginHandler); // Si no existe, crea un usuario en la DB 
route.post('/api/checkout',cheackoutApi) // Ruta para manejar los pagos (stripe)
route.put('/update/:email',putUserHandler); // Actualiza los datos del perfil de usuario
route.get('/update/:email',getUserHandler); // Trae los datos del usuario
route.put('/update/img/:email',putPhotoHandler); // Actualiza la foto del perfil de usuario
route.get('/get/:id', getUserByIdHandler) //trae el usuario por ID

module.exports = route;