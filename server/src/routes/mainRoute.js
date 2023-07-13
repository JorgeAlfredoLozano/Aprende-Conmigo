const { Router } = require("express");
const userRoute=require("./userRoute"); 
const publicationRoute=require("./publicationRoute")
const lessonRoute=require("./lessonRoute");
const route = Router();

// Asociamos la ruta userRoute a la ruta /user
route.use("/user",userRoute); // manejo de rutas de usuarios
route.use("/publication",publicationRoute); //manejo de rutas de publicaciones/avisos
route.use("/lesson",lessonRoute); //manejo de rutas de las materias

module.exports = route;