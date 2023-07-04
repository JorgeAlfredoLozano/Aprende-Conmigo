require('dotenv').config()
const { Sequelize } = require('sequelize')

const usuario = require('./models/Usuario')

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env

const sequelize = new Sequelize(

    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, // => localhost
{
host: `${DB_HOST}`,
dialect: 'postgres',
        logging: false, // set to console.log to see the raw SQL queries
       native: false, // lets Sequelize know we can use pg-native for ~30% more speed
}
)

const { modelos } = sequelize.models

Modelo(sequelize)

//relaciones
modelo.belongsToMany(modelo, {
    through: 'tabla intermedia', timestamps: false
})

module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize, // para importart la conexión { conn } = require('./db.js');
}
