//Levantar Server, sincronizar base de datos.

const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const lessonsJson=require('./src/utils/lessons.json')
const {Lesson}=require('./src/db.js')
const postLessonHandler=require('./src/handlers/lesson/postLessonHandler.js')
const cors = require('cors')
server.use(cors())

port = process.env.PORT

conn.sync({ Altern: true })  
.then(() => postLessonHandler(lessonsJson, Lesson))
.then(() => {
    server.listen(port, () => {
      console.log(`server listening at ${port}`); // eslint-disable-line no-console
    });
});
