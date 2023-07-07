//Levantar Server, sincronizar base de datos.

const server = require('./src/app.js');
const { conn } = require('./src/db.js');


// conn.sync({ force: true }).then(() => {
  conn.sync({ alter: true }).then(() => { //con esta wea no c borran los datos de la db, pa deployear en false
    server.listen(3001, () => {
      console.log('server listening at 3001'); // eslint-disable-line no-console
    });
});