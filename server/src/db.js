require('dotenv').config()  // Carga las variables de entorno desde el archivo .env
const { Sequelize } = require('sequelize') //Importa la clase Sequelize del paquete sequelize
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env // Obtiene los valores de las variables de entorno relacionadas con la base de datos
const fs = require('fs'); // Módulo de manejo de archivos del sistema
const path = require('path');  // Módulo para trabajar con rutas de archivos y directorios


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, // => localhost
{logging: false, native: false}
)

const basename = path.basename(__filename); 
const modelDefiners = [];  

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach(model => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Publication, Lesson, User, Message, Purchase, Review } = sequelize.models;

User.hasMany(Publication)
Publication.belongsTo(User)

Publication.belongsToMany(Lesson, {through: 'PublicationLesson'})
Lesson.belongsToMany(Publication, {through: 'PublicationLesson'})

User.hasMany(Purchase); // un usuario puede terner muchas compras
Publication.hasMany(Purchase); // una publicacion puede estar en varias compras

Purchase.belongsTo(User); // una compra pertenece a un usuario
Purchase.belongsTo(Publication); //una compra pertenece a una publicacion

User.hasMany(Review);// un User puede hacer muchas Review
Review.belongsTo(User);// una Review pertenece a una User

Publication.hasMany(Review); // una Publication puede tener muchas Review
Review.belongsTo(Publication);// una Review pertenece a una Publication

module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize, // para importart la conexión { conn } = require('./db.js');
}
