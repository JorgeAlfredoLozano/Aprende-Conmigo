//Levantar Server, sincronizar base de datos.

const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const lessonsJson=require('./src/utils/lessons.json')
const {Lesson}=require('./src/db.js')
const postLessonHandler=require('./src/handlers/lesson/postLessonHandler.js')
const allowCors = require('./allowCors.js')
const whatsapp = require('./src/whatsapp.js')
const cors = require('cors');
// server.use(allowCors);

server.use(cors({
  origin: 'https://aprende-one.vercel.app'
}));

conn.sync({ Altern: true })  //alter force
.then(() => postLessonHandler(lessonsJson, Lesson))
.then(() => whatsapp)
.then(() => {
    server.listen(3001, () => {
      console.log('server listening at 3001'); // eslint-disable-line no-console
    });
});
