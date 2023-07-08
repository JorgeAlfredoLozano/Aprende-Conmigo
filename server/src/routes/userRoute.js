const { Router } = require("express");
<<<<<<< HEAD
//const createUserHandler = require("../handlers/createUserHandler") // requerimos el handler
=======
>>>>>>> 3e981fa5db17d68f386b5dddb851a4b1efd7513c
const createUserLogin = require("../handlers/createUserLogin")
const {putUser,getUser,putPhoto}=require("../rutas/User")
const route = Router();

// Define la ruta y su manejador para la creación de usuario
<<<<<<< HEAD
//route.post('/',createUserHandler );
=======
>>>>>>> 3e981fa5db17d68f386b5dddb851a4b1efd7513c
route.post('/login',createUserLogin);
route.put('/update/:email',putUser);
route.get('/update/:email',getUser);
route.put('/update/img/:email',putPhoto);


module.exports = route;

