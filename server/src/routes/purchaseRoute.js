const { Router } = require("express");
const postPurchaseHandler = require('../handlers/purchase/postPurchaseHandler');
const getBuyUserHandler = require('../handlers/purchase/getBuyUserHandler');
const getSaleHandler = require('../handlers/purchase/getSaleHandler');

const route = Router();

route.post('/',postPurchaseHandler); //guardo el pago 
route.get('/getuser/:id',getBuyUserHandler); //traer las compras realizadas por un usuario(id)
route.get('/getsale/:id',getSaleHandler); //trae todas las ventas de un usuario(id)

module.exports = route;