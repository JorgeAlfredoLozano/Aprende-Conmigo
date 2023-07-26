const { Router } = require("express");
const route = Router();


const postFavHandler=require('../handlers/favorites/postFavHandler')
const getFavHandler= require("../handlers/favorites/getFavHandler")
const deleteFavHandler= require("../handlers/favorites/deleteFavHandler")

route.post('/',postFavHandler); //Creación de Aviso

route.get("/:UserId",getFavHandler )

route.delete("/:id", deleteFavHandler )


module.exports = route;