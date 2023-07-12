const { Router } = require("express");
const {getLesson}=require("../rutas/Lesson");

const route = Router();

// Define la ruta y su manejador para la creación de usuario

route.get('/all',getLesson);



module.exports = route;