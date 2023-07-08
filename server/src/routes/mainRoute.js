const { Router } = require("express");
const userRoute=require("./userRoute"); //requerimos la ruta urserRoute
const route = Router();

// Asociamos la ruta userRoute a la ruta /user
route.use("/user",userRoute)





module.exports = route;