
const { Router } = require("express");
const createUserHandler = require("../handlers/createUserHandler") // requerimos el handler
const route = Router();

// Define la ruta y su manejador para la creación de usuario
route.post('/',createUserHandler );






module.exports = route;

