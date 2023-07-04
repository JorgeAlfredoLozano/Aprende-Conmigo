const server = require('./ser/src/app.js');
const { conn } = require('./ser/src/db.js');


conn.sync({ force: true }).then(() => {
    server.listen(3001, () => {
      console.log('server listening at 3001'); // eslint-disable-line no-console
    });
});