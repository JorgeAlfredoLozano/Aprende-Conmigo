const { Router } = require("express");
const userRoute=require("./userRoute");
const route = Router();


route.use("/user",userRoute)





module.exports = route;