
const { Router } = require("express");
const createUserHandler = require("../handlers/createUserHandler") // requerimos el handler
const createUserLogin = require("../handlers/createUserLogin")
// const updateUserHandler=require("../handlers/updateUserHandler")
const {putUser,getUser}=require("../rutas/User")
const route = Router();

// Define la ruta y su manejador para la creación de usuario
//route.post('/',createUserHandler );
route.post('/login',createUserLogin);
route.put('/update/:email',putUser);
route.get('/update/:email',getUser);



module.exports = route;

