const { Router } = require("express");
const {postPublication,putPublication,getAllPublication}=require("../rutas/User")
const route = Router();

route.post('/save/:email',postPublication);
route.put('/save/:id',putPublication);
route.get('/get/:email',getAllPublication);


module.exports = route;