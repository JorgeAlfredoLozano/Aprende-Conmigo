
const { Router } = require("express");
const createUserHandler = require("../handlers/createUserHandler") // requerimos el handler
const createUserLogin = require("../handlers/createUserLogin")
const route = Router();

// Define la ruta y su manejador para la creación de usuario
route.post('/',createUserHandler );
route.post('/login',createUserLogin)





module.exports = route;

