const { Router } = require("express");
const userRoute=require("./userRoute"); //requerimos la ruta urserRoute
const rute=require("../Cloudinary/upload/rute")
const route = Router();

// Asociamos la ruta userRoute a la ruta /user
route.use("/user",userRoute)
// route.use("/image",rute)




module.exports = route;