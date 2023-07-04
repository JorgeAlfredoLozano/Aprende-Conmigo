
const { Router } = require("express");
const createUserHandler=require("../handlers/createUserHandler")
const route = Router();


route.post('/',createUserHandler );






module.exports = route;

