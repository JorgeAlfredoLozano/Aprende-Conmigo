//Levantar Server, sincronizar base de datos.

const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const lessonsJson=require('./src/utils/lessons.json')
const {Lesson}=require('./src/db.js')
const {postLesson}=require('./src/rutas/Lesson.js')
conn.sync({ force: true })
.then(() => postLesson(lessonsJson, Lesson))
.then(() => {
    server.listen(3001, () => {
      console.log('server listening at 3001'); // eslint-disable-line no-console
    });
});