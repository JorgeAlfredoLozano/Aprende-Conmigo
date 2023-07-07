
const { Router } = require("express");
const createUserLogin = require("../handlers/createUserLogin")
const {putUser,getUser,putPhoto}=require("../rutas/User")
const route = Router();

// Define la ruta y su manejador para la creación de usuario
route.post('/login',createUserLogin);
route.put('/update/:email',putUser);
route.get('/update/:email',getUser);
route.put('/update/img/:email',putPhoto);


module.exports = route;

