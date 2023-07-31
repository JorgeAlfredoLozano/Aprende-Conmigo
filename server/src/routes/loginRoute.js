const { Router } = require("express");
const route = Router();

const loginHandler = require("../handlers/login/loginHandler")
const siginHandler = require('../handlers/login/signinHandler')
const verificationHandler = require('../handlers/login/verificationHandler') 

route.post('/register', siginHandler); // Si no existe, crea un usuario en la DB 
route.post('/login', loginHandler); // Si existe, devuelve la info
route.put('/verification', verificationHandler) //verification
module.exports = route;