require('dotenv').config()  // Carga las variables de entorno desde el archivo .env
const { Sequelize } = require('sequelize') //Importa la clase Sequelize del paquete sequelize
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env // Obtiene los valores de las variables de entorno relacionadas con la base de datos
const fs = require('fs'); // Módulo de manejo de archivos del sistema
const path = require('path');  // Módulo para trabajar con rutas de archivos y directorios

// Crea una nueva instancia de Sequelize para establecer la conexión a la base de datos
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, // => localhost
{logging: false, native: false}
// Deshabilita los registros de consultas SQL en la consola
 //Indica a Sequelize que no utilice el módulo pg-native para un mayor rendimiento
)
const basename = path.basename(__filename); // Obtiene el nombre base del archivo actual
const modelDefiners = [];  // Arreglo para almacenar los modelos de base de datos

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Inyectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Publication, Lesson, User, Message } = sequelize.models;

User.hasMany(Publication)
Publication.belongsTo(User)

Publication.belongsToMany(Lesson, {through: 'PublicationLesson'})
Lesson.belongsToMany(Publication, {through: 'PublicationLesson'})

module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize, // para importart la conexión { conn } = require('./db.js');
}
