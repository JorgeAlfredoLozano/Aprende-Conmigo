const { Router } = require("express");
const userRoute=require("./userRoute"); //requerimos la ruta urserRoute
const publicationRoute=require("./publicationRoute")
const lessonRoute=require("./lessonRoute");
const route = Router();

// Asociamos la ruta userRoute a la ruta /user
route.use("/user",userRoute);
route.use("/publication",publicationRoute);
route.use("/lesson",lessonRoute);



module.exports = route;