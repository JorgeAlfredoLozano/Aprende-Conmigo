const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/mainRoute');  // Importa las rutas definidas en el archivo mainRoute.js
require('./db.js');  // Importa la configuración de la base de datos desde el archivo db.js
const server = express();  // Crea una instancia de Express

server.use(morgan('dev'));
server.use(express.json());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.use(routes); // Agrega las rutas definidas en mainRoute.js al servidor Express

module.exports = server; // Exporta el servidor Express para que pueda ser utilizado en otros módulos