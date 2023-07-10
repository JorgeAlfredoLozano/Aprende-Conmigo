const { Router } = require("express");
<<<<<<< HEAD
const {postPublication,putPublication,getAllPublication}=require("../rutas/User")
const route = Router();

route.post('/save/:email',postPublication);
route.put('/save/:id',putPublication);
route.get('/get/:email',getAllPublication);

=======
const {postPublication}=require("../rutas/User")
const route = Router();

route.post('/save/:email',postPublication);
>>>>>>> 72bcb867b864579234c4b77094c4e5508633eb77

module.exports = route;