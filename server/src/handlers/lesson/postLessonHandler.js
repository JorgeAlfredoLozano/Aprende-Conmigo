/* HANDLER Posteo de Materias */
const postLessonController = require("../../controllers/lesson/postLessonController");

const postLessonHandler=async (jsonInfo, model) => {
       try {
        const lessonInDb = await postLessonController(jsonInfo, model)
       } catch (err) {
          console.log(err.message,"1");
       }
};

module.exports = postLessonHandler;