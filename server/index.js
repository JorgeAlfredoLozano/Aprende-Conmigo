//Levantar Server, sincronizar base de datos.

const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const lessonsJson=require('./src/utils/lessons.json')
const {Lesson}=require('./src/db.js')
const postLessonHandler=require('./src/handlers/lesson/postLessonHandler.js')
const cors = require('cors')
server.use(cors({origin: 'http://localhost:5173'}))

conn.sync({ alter: true })
.then(() => postLessonHandler(lessonsJson, Lesson))
.then(() => {
    server.listen(3001, () => {
      console.log('server listening at 3001'); // eslint-disable-line no-console
    });
});