const { Router } = require("express");
const {postPublication}=require("../rutas/User")
const route = Router();

route.post('/save/:email',postPublication);

module.exports = route;