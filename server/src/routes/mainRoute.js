const { Router } = require("express");
const userRoute=require("./userRoute"); 
const publicationRoute=require("./publicationRoute")
const lessonRoute=require("./lessonRoute");
const messageRoute=require("./messageRoute")
const favRoute = require("./favRoute")
const route = Router();

// Asociamos la ruta userRoute a la ruta /user
route.use("/user",userRoute); // manejo de rutas de usuarios
route.use("/publication",publicationRoute); //manejo de rutas de publicaciones/avisos
route.use("/lesson",lessonRoute); //manejo de rutas de las materias
route.use("/message",messageRoute); //manejo de rutas de las materias
route.use("/fav", favRoute) //manejo de ruta de los favoritos


module.exports = route;