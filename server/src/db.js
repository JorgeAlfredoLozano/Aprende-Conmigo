require('dotenv').config()
const { Sequelize } = require('sequelize')
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env
const UserModel = require('./models/User');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, // => localhost
{logging: false, native: false} // set to console.log to see the raw SQL queries
  // lets Sequelize know we can use pg-native for ~30% more speed
)
UserModel(sequelize)

module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize, // para importart la conexión { conn } = require('./db.js');
}
